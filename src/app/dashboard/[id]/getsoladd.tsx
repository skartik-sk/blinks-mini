'use client';
import { ICreator } from '@/lib/interface/creater';
import { IUser } from '@/lib/interface/user'
import Link from 'next/link';
import React, { useEffect,useState } from 'react'

export const dynamic = 'force-dynamic'

const Getsoladd = ({leaderboard,id,creator}:{leaderboard:IUser[],id:string,creator:ICreator}) => {
console.log(creator);
    const [walletAddress, setWalletAddress] = useState(null);

    const isPhantomInstalled = () => {
        return typeof window !== 'undefined' && window.solana && (window.solana.isPhantom || window.solana.isMobile);
      };
    useEffect(() => {
        getSolanaAddress();
    }
    , [])
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

     
  return (
<div className='text-white flex gap-3'>
    {
        leaderboard.some(item => item.solAdd == walletAddress) && (
        <Link href={`https://reclaim-verify-xmm5.vercel.app/?id=${id}`}>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-xl font-medium rounded hover:bg-blue-700">
                Verify with reclaim
            </button>
        </Link>
        )
    }
    {
      (creator.solAdd==walletAddress) && (

            console.log("senders" + walletAddress),
            <button onClick={()=>{
              // sendButtonClick()
            }} className="mt-4 px-4 py-2 bg-green-600 text-white text-xl font-medium rounded hover:bg-green-700">
            Disperse
            </button>
      
        )
    }

  </div>
  )
}

export default Getsoladd