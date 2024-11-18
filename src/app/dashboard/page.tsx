

import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";

import Creatorpage from "./creatorpage";
// import { IUser } from "@/lib/interface/user";
import User from "@/lib/models/user";
// import { useEffect, useState } from "react";
export const dynamic = 'force-dynamic'
export default  function Component() {
    const [walletAddress, setWalletAddress] = useState("");
    let creators: ICreator[] = [];

    const isPhantomInstalled = () => {
        return typeof window !== 'undefined' && window.solana && (window.solana.isPhantom || window.solana.isMobile);
      };
    async function  getSolanaAddress() {
        if (isPhantomInstalled()) {
            try { 
              const { solana }:any = window;
              // Request connection to Phantom
              const response = await solana.connect();
              console.log('Connected to wallet:', response.publicKey.toString());
              setWalletAddress(response.publicKey.toString());
            } catch (error) {
              console.error('Error connecting to Phantom wallet:', error);
            }
          } 
    }
    let xyz: ICreator[] = [];
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
  
          const id = searchParams.get('id');
          if (!id) {
            getSolanaAddress();
          } else {
            setWalletAddress(id);
          }

          async function getdata() {
            try {
    
                await connectDB();
                creators = await Creator.find().sort({ _id: -1 });
         const users= await User.find({ solAdd: walletAddress }).sort({ _id: -1 });
         const creatorIds = users.map((user) => {
                        const url = new URL(user.post);
                        return url.pathname.split("/")[3];
                      });
                
                      xyz=      await  Creator.find({ _id: { $in: creatorIds } }).sort({ _id: -1 })
          // Replace with the actual solAdd value
          
          
                console.log(creators);
              } catch (error) {
                console.error(error);
              }
          }
          getdata();
          // getSolanaAddress();
      }
      , [])
 
  

    return (
      <div className="mt-12 text-white p-4 sm:p-6 lg:p-8">
        <div className="flex gap-6 ">
          <Creatorpage creator={creators} xyz={xyz}  />
        </div>
      </div>
    );
}