
import React from 'react'

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Clock, Trophy } from "lucide-react";
import connectDB from '@/lib/dbconnect';
import { IUser } from '@/lib/interface/user';
import User from '@/lib/models/user';
import Getsoladd from './getsoladd';
import { ICreator } from '@/lib/interface/creater';
import Creator from '@/lib/models/creater';
import Image from 'next/image';



const Page = async ({ params }: { params: { id: string } }) => {

  let leaderboard: IUser[] = [];
  let creater: ICreator = {} as ICreator;
  try {
    await connectDB();
    leaderboard = await User.find({ 'post': `https://blinks.knowflow.study/api/donate/${params.id}?amount=0.1` }).sort({ views: -1 });
    creater = await Creator.findById(params.id) as ICreator;
  } catch (error) {
    console.error(error);

  }

  return (
    <>
      <div className=" text-white min-h-screen flex flex-col p-4 sm:p-6">
        <Getsoladd leaderboard= {leaderboard} id={params.id} creator={creater}/>
        <div className="flex-grow flex flex-col max-w-6xl mx-auto w-full">
          <div className="flex sm:flex-row justify-between mb-8 space-y-6 sm:space-y-0">
            {/* Top 3 Players */}
            {leaderboard.slice(0, 3).map((player, index) => (
              <div key={player.id} className="flex-1 text-center">
                <div className={`w-${index === 1 ? "20" : "16"} h-${index === 1 ? "20" : "16"} mx-auto mb-2 relative`}>
                  <Image
                    src={player.igProfile || "/placeholder.svg"} // fallback for missing image
                    alt={player.solAdd}
                    width={index === 1 ? 80 : 64}
                    height={index === 1 ? 80 : 64}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="font-bold">{ }</h3>
                <div className="text-gray-400 text-sm">Earn {player.views} SOL</div>
                <div className="text-blue-400 font-bold">{creater.amount.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Prize</div>
              </div>
            ))}
          </div>

          {/* Countdown Timer */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center text-gray-400">
              <Clock className="w-4 h-4 mr-2" />
              <span>Ends in</span>
            </div>
            <div className="text-xl font-bold">00d 00h 43m 51s</div>
          </div>

          {/* User Stats */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6 text-center">
            <span className="text-gray-400">Leaderboard created by </span>
            <span className="text-blue-400 font-bold">{creater.title}</span>
          </div>

          {/* Leaderboard Table */}
          <div className="overflow-x-auto flex-grow">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="text-left py-2">Place</th>
                  <th className="text-left py-2">Username</th>
                  <th className="text-right py-2">SOL</th>
                  <th className="text-right py-2">Prize</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.slice(3).map((player, index) => (
                  <tr key={player.id} className="border-t border-gray-800">
                    <td className="py-2">
                      <Trophy className="w-4 h-4 text-gray-400 inline mr-2" />
                      {index + 4}
                    </td>
                    <td>{player.solAdd}</td>
                    <td className="text-right">{player.views}</td>
                    <td className="text-right text-blue-400">{creater.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page