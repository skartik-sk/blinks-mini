import Creator from "@/lib/models/creater";
import User from "@/lib/models/user";
import {  ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";


export  async function GET(request:Request ,params:{params:{id:string}  }){ 
    const url = new URL(request.url);
    // console.log("url: ",);
    // const { searchParams } = new URL(request.url);
    // console.log("searchParams: " +searchParams);
    // const id = searchParams.get('id')||"";
    // console.log("id" +id);
    console.log("params",params);
    const id = await params.params.id;
 
console.log("id", id);
    let creator;
    try{
        creator = await Creator.findOne({ _id: id });
console.log(creator);
if (!creator) {
    creator = {
        icons: "https://instagram.fbho3-4.fna.fbcdn.net/v/t51.2885-19/344094165_1428989347924242_319794666472247536_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbho3-4.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EWLNdoJWV4IQ7kNvgEYR9wa&_nc_gid=28bc22d4a71f4a998b6201b6141396ba&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYC2vVUcPuINfMw18GB5pbeekHEJDPbhs7M6MwvyT6oLSg&oe=6708078F&_nc_sid=8b3546",
        title: "Donate to pranesh",
        description: "Donate to the Solana Foundation to support the Solana ecosystem.",
        label: "Donate",    
    };
}

        // console.log(creator);
        

    }
    catch(e){
        return Response.json({error:e},{status:400,headers:ACTIONS_CORS_HEADERS});
    }
  const payload:ActionGetResponse = {
    icon: creator.icons,
    title: creator.title,
    description:creator.description ,
    label:creator.label,
    links: {
        actions :[
            {
                type:"transaction",
                label:"Participate 0.1 Sol",
                href:`${url.href}?amount=0.1`,
            },
        ]
    }

   
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
}
export const OPTIONS = GET;

export  async function POST(request:Request){
    const body: ActionPostRequest = await request.json();
    const url = new URL(request.url);

    const amount  =  Number(url.searchParams.get("amount")) || 0.2;

    let sender ;
    try{
        sender = new PublicKey(body.account);
        console.log("sender add" +sender);

    }catch(e){
        return Response.json({error:e},{status:400,headers:ACTIONS_CORS_HEADERS});
    }

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    // const payer = Keypair.generate(); // Replace with your payer Keypair
    
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: sender,
            toPubkey: new PublicKey("9cV3D54tgGDxwXZeKUPt634diseVQETo56HoHejy6tAA"),
            lamports: amount * LAMPORTS_PER_SOL,
        })
    );

    const blockheight = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockheight.blockhash;
    transaction.lastValidBlockHeight = blockheight.lastValidBlockHeight;
    transaction.feePayer = sender;
    // transaction.sign(payer);

    const payload: ActionPostResponse = {
        type: "transaction",
        transaction: transaction.serialize({ verifySignatures: false }).toString("base64"),
        message: "Transaction created",
    };
    try {

      const newUser = new User({
        solAdd: sender.toString(),
  post:  url.href.toString(), 
  isAwarded: false,


        
      });

      await newUser.save();
      console.log(newUser);
      return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });    
        
    } catch (error) {
        return Response.json({error:error},{status:400,headers:ACTIONS_CORS_HEADERS});
        
    }


    // // Redirect to a specific page after transaction creation
    // const redirectUrl = new URL('/some-page', url.origin);
    // redirectUrl.searchParams.set('transaction', payload.transaction);
    // redirectUrl.searchParams.set('message', payload.message);

    // return Response.redirect(redirectUrl.toString(), 302);
    // return Response.json(payload, {
    //     headers: ACTIONS_CORS_HEADERS,
    // });
        
}