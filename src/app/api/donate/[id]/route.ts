import {useDashhProgramAccount} from "@/components/dashh/dashh-data-access";
import Creator from "@/lib/models/creater";
import User from "@/lib/models/user";

import {  ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import IDL  from "../../../../../anchor/target/idl/dashh.json";
import { Program } from "@coral-xyz/anchor";
import { Dashh, getDashhProgram } from "../../../../../anchor/src";
import { useAnchorProvider } from "@/components/solana/solana-provider";
import { useQuery } from "@tanstack/react-query";

export  async function GET(request:Request ,params:{params:{id:string}  }){ 
    const url = new URL(request.url);
    const id = await params.params.id;
 console.log(id);
 const provider = useAnchorProvider()
 const programId = "5PrtiiJ1m6NmepQ7XD2ZmPKSw8o8RGVnFUuMUXLPcjfP"
 const program = getDashhProgram(provider)

  const accountQuery = useQuery({
    queryKey: ['dashh', 'fetch', { cluster:'devnet', account: programId }],
    queryFn: () => program.account.campaign.fetch(id),
  })

//   const getProgramAccount = useQuery({
//     queryKey: ['get-program-account', 'devnet'],
//     queryFn: () => connection.getParsedAccountInfo(new PublicKey(programId)),
//   })

       console.log("account query ",accountQuery);

const creator = {
    icons: accountQuery.data?.image ,
    title : accountQuery.data?.title,
    description : accountQuery.data?.description,
     label : accountQuery.data?.lable,
};

    

  const payload:ActionGetResponse = {
    icon: creator.icons?  creator.icons : "https://cdn.vectorstock.com/i/500p/04/45/solana-logo-coin-icon-isolated-vector-43670445.jpg",
    title: creator.title ? creator.title : "Donate to Solana",
    description:creator.description ? creator.description : "Donate to the Solana Foundation to support the Solana ecosystem.",
    label:creator.label ? creator.label : "Donate",
    links: {
        actions :[
           
        //{
        //         type:"transaction",
        //         label:"Participate",
        //         href:`${url.href}?amount={amount}`,
        //         "parameters": [
        //   // {amount} input field
        //   {
        //     "name": "amount", // input field name
        //     "label": "SOL amount" // text input placeholder
        //   }
        // ],
        //     },
            { type:'external-link',
            label:'See Leaderboard',
            href:`${url.origin}/api/redirect/${id}`,
            },{
                type:"external-link",
                label:"Verify With Reclaim",
                href:`${url.origin}/api/reclaim/${id}`,
                
            }, {
                type:"transaction",
                label:"Participate",
                href:`${url.href}?amount=0`,
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
const amount  =  Number(url.searchParams.get("amount")) || 0;

    let sender ;

    try{
        sender = new PublicKey(body.account);

//         const Post = await Creator.findById(url.pathname.split("/")[3])
// imgurl=Post?.icons

    }catch(e){
        return Response.json({error:e},{status:400,headers:ACTIONS_CORS_HEADERS});
    }

    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    // const payer = Keypair.generate(); // Replace with your payer Keypair
    
    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: sender,
            toPubkey: new PublicKey("8vbaCLhg1SZmiGNZfFzV2DEJHenFtdgg7G2JtY5v74i1"),
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
        message: `Participation done successfully`,

        // links: {
        //     next: {
        //         type:"post",
        //         href: `${url.origin}/api/redirect/${url.pathname.split("/")[3]}`,
        //     },
        // }
    };
    try {
        const creater = await Creator.findById(url.pathname.split("/")[3]);
        if (creater) {
            creater.users.push(sender.toString());
            await creater.save();
        }
      const newUser = new User({
        solAdd: sender.toString(),
  post:  url.href.toString(), 
  isAwarded: false,
      });

      await newUser.save();

    //   redirect("https://blinks.knowflow.study");
      return Response.json(payload,{
        headers : ACTIONS_CORS_HEADERS,
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