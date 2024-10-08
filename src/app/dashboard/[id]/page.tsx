
import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Eye } from "lucide-react";
import connectDB from '@/lib/dbconnect';
import { IUser } from '@/lib/interface/user';
import User from '@/lib/models/user';
import Getsoladd from './getsoladd';



const Page = async({params}:{params:{id:string}} ) => {
//http://localhost:3000/api/donate/6704221df49eb4a6e57bac79?amount=0.1
    await connectDB();
    let leaderboard: IUser[] = [];
    try {
    leaderboard = await User.find({ 'post': `http://localhost:3000/api/donate/${params.id}?amount=0.1` }).sort({ views: -1 });
    } catch (error) {
      console.error(error);
      
    }
   
  return (
    <> <div className="md:col-span-2 h-[calc(100vh)] sm:h-[calc(100vh)] lg:h-[calc(100vh)] flex flex-col bg-black border-gray-800">
        {leaderboard.length>0?
        (
    <Card className="h-[calc(100vh-2rem)] sm:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)] flex flex-col bg-black border-gray-800">

        <CardContent>
           
        
        </CardContent>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl font-bold flex justify-between items-center gap-2 text-white">
        <div className='text-xl sm:text-2xl font-bold flex  items-center gap-2 text-white'>  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
        Leaderboard</div>
          <Getsoladd leaderboard= {leaderboard}/>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden">
        <div className="h-full overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-800">
                <TableHead className="w-16 sticky top-0 bg-black z-10 text-gray-400">Rank</TableHead>
                <TableHead className="sticky top-0 bg-black z-10 text-gray-400">SOL Address</TableHead>
                <TableHead className="text-right sticky top-0 bg-black z-10 text-gray-400">Views</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

              {leaderboard.map((item, index) => (
                <TableRow key={item.id} className="border-b border-gray-800">
                  <TableCell className="font-medium text-gray-300">{index + 1}</TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm break-all text-gray-400">{item.solAdd}</TableCell>
                  <TableCell className="text-right text-gray-300">{item.views}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>)
    :(<>
    <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <p className="text-lg">No one has participated yet.</p>
    </div>
    
    </>)}
  </div>

  
    </>
  )
}

export default Page