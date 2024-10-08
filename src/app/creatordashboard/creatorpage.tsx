'use client';

import React, {useState, useEffect } from 'react'


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import {SolanaBlinksCard} from '../blinkcard/page';
// import connectDB from "@/lib/dbconnect";
// import { ICreator } from "@/lib/interface/creater";
// import Creator from "@/lib/models/creater";
import Link from "next/link";
import { ICreator } from '@/lib/interface/creater';

const Creatorpage = ({creator}:{creator: ICreator[]}) => {
    const [walletAddress, setWalletAddress] = useState("");
 
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
    creator = creator.filter((creator) => creator.solAdd == walletAddress);
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex justify-end  text-white'>
                <Link href='/form'>
                    <button className="mt-4 mr-2 sm:mr-15 px-4 py-2 bg-blue-600 text-white text-xl font-medium rounded hover:bg-blue-700">
                        Add Event
                    </button>
                </Link>
            </div>
            <div className="flex flex-wrap gap-5 justify-center md:col-span-2 lg:col-span-1">
                
            {
                creator.map((creator) => {
                return (
                <>
                    <Link href={`/dashboard/${creator.id}`}>
                        <Card  className="bg-black text-white h-fit border-gray-800">
                            <CardHeader>
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
                                <h3 className="text-lg font-semibold mb-1 text-gray-400">Top Performer</h3>
                                {/* <p className="font-mono text-xs sm:text-sm mb-1 break-all text-gray-500">{topPerformer.address}</p> */}
                                {/* <Badge variant="secondary" className="bg-purple-900 text-purple-100 hover:bg-purple-800">
                                    {topPerformer.views.toLocaleString()} views
                                </Badge> */}
                                </div>
                                <div>
                                <h3 className="text-lg font-semibold mb-1 text-gray-400">Network Status</h3>
                                <Badge variant="secondary" className="bg-green-900 text-green-100 hover:bg-green-800">
                                    Active
                                </Badge>
                                </div>
                            </CardContent>
                            <SolanaBlinksCard content ={creator}  id={creator.id}/>
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