'use client';

import React, {useState, useEffect } from 'react'


import { Card } from "@/components/ui/card";

// import { Badge } from "@/components/ui/badge";
// import { Zap } from "lucide-react";
import {SolanaBlinksCard} from '../blinkcard/SolanaBlinksCard';
// import connectDB from "@/lib/dbconnect";
// import { ICreator } from "@/lib/interface/creater";
// import Creator from "@/lib/models/creater";
import Link from "next/link";
import { ICreator } from '@/lib/interface/creater';
import CustomToggle from '@/components/custom-toggle';

const Creatorpage = ({creator}:{creator: ICreator[]}) => {
    const [walletAddress, setWalletAddress] = useState("");
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
              setWalletAddress(response.publicKey.toString());
            } catch (error) {
              console.error('Error connecting to Phantom wallet:', error);
            }
          } 
    }
    useEffect(() => {
        getSolanaAddress();
    }
    , [])
    
    creator = creator.filter((creator) => creator.solAdd == walletAddress);
if(selectedOption === 'Closed'){
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  creator = creator.filter((creator) => new Date(creator.end) < yesterday);
}

    return (
        <div className='flex flex-col gap-5 w-screen'>
            <div className='flex justify-between  items-center text-white'>
              <div>

            <CustomToggle options={["Live", "Closed"]} onChange={handleToggle} />
              </div>
            <div className='font-semibold text-xl text-white'>Creater's Event</div>
                <Link href='/form'>
                    <button className="mt-4 mr-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 sm:mr-15 px-4 py-2 text-white text-xl font-medium rounded hover:from-purple-400 hover:via-pink-400 hover:to-orange-400">
                      Add Event
                    </button>
                </Link>
            </div>
            <div className="flex flex-wrap gap-5 justify-center md:col-span-2 lg:col-span-1">
                
            {
                creator.map((cat) => {

                return (
                <>
                    <Link href={`/dashboard/${cat._id}`}>
                    <Card className="bg-black text-white h-fit border-gray-800">
                      {/* <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                          <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                          {creator.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-gray-400">Total Prize</h3>
                          <p className="text-2xl sm:text-3xl font-bold text-white">{creator.amount}</p>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-1 text-gray-400">Network Status</h3>
                          <Badge variant="secondary" className="bg-green-900 text-green-100 hover:bg-green-800">
                            Active
                          </Badge>
                        </div>
                      </CardContent> */}
                      <SolanaBlinksCard content={cat} id={cat._id} />
                    </Card>
                    </Link>
                    </>
                )
                })
            }
            
            </div>
        </div>
    )
}

export default Creatorpage;