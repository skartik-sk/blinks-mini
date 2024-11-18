'use client';

import React, {useState, useEffect } from 'react'


import { Card } from "@/components/ui/card";

// import { Badge } from "@/components/ui/badge";
// import { Zap } from "lucide-react";
import {SolanaBlinksCard} from '../blinkcard/SolanaBlinksCard';
// import connectDB from "@/lib/dbconnect";
// import { ICreator } from "@/lib/interface/creater";
// import Creator from "@/lib/models/creater";

import { ICreator } from '@/lib/interface/creater';
import CustomToggle from '@/components/custom-toggle';

const Creatorpage = ({creator,xyz}:{creator: ICreator[],xyz:ICreator[]}) => {
    // const [walletAddress, setWalletAddress] = useState("");
    const [selectedOption, setSelectedOption] = useState('Live');

    const handleToggle = (selected: string) => {
      setSelectedOption(selected);
    };
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
              // setWalletAddress(response.publicKey.toString());
            } catch (error) {
              console.error('Error connecting to Phantom wallet:', error);
            }
          } 
    }
    useEffect(() => {
      // const searchParams = new URLSearchParams(window.location.search);

        
        
          getSolanaAddress();
        
        // getSolanaAddress();
    }
    , [])
    

    creator = creator.sort((a, b) => {
      const aDaysLeft = (new Date(a.end).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
      const bDaysLeft = (new Date(b.end).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24);
      return aDaysLeft - bDaysLeft;
    });

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
if(selectedOption === 'Participated'){
 
  creator = creator.filter((creator) => new Date(creator.end) < yesterday);
}
if(selectedOption === 'All'){
  creator= xyz;
}


    return (
        <div className='flex flex-col gap-5 w-screen'>
            <div className='flex justify-between  items-center text-white'>
              <div>

            <CustomToggle options={["All", "Participated"]} onChange={handleToggle} />
              </div>
            <div className='font-semibold text-xl text-white'>Explore Events</div>
                
            </div>
            <div className="flex flex-wrap gap-5 justify-center md:col-span-2 lg:col-span-1">
                
            {
                creator.map((cat) => {

                return (
                <>

                    <Card className="bg-black text-white h-fit border-gray-800">
                      <SolanaBlinksCard content={cat} id={cat._id} />
                    </Card>
                  
                    </>
                )
                })
            }
            
            </div>
        </div>
    )
}

export default Creatorpage;