'use client';
import { IUser } from '@/lib/interface/user'
import Link from 'next/link';
import React, { useEffect,useState } from 'react'

const Getsoladd = ({leaderboard,id}:{leaderboard:IUser[],id:string}) => {
    const [walletAddress, setWalletAddress] = useState(null);
 console.log(id);
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
<div className='text-white'>
    {
        leaderboard.some(item => item.solAdd == walletAddress) && (
        <Link href={`https://reclaim-verify-xmm5.vercel.app?id=${id}`}>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-xl font-medium rounded hover:bg-blue-700">
                Reclaim
            </button>
        </Link>
        )
    }

  </div>
  )
}

export default Getsoladd