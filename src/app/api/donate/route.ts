import {  ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export  async function GET(request:Request){ 
    const url = new URL(request.url);
  const payload:ActionGetResponse = {
    icon: "https://instagram.fbho3-4.fna.fbcdn.net/v/t51.2885-19/344094165_1428989347924242_319794666472247536_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbho3-4.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EWLNdoJWV4IQ7kNvgEYR9wa&_nc_gid=28bc22d4a71f4a998b6201b6141396ba&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYC2vVUcPuINfMw18GB5pbeekHEJDPbhs7M6MwvyT6oLSg&oe=6708078F&_nc_sid=8b3546",
    title: "Donate to pranesh",
    description: "Donate to the Solana Foundation to support the Solana ecosystem.",
    label: "Donate",
    links: {
        actions :[
            {
                type:"transaction",
                label:"Donate 0.1 Sol",
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

    const payload:ActionPostResponse= {
        type: "transaction",
        transaction: transaction.serialize({verifySignatures:false}).toString("base64"),
        message: "Transaction created",
    };
    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
        
}