
import React from 'react'

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Clock, Crown, Trophy } from "lucide-react";
import connectDB from '@/lib/dbconnect';
import { IUser } from '@/lib/interface/user';
import User from '@/lib/models/user';
import Getsoladd from './getsoladd';
import { ICreator } from '@/lib/interface/creater';
import Creator from '@/lib/models/creater';
import Image from 'next/image';



const Page = async ({ params }: { params: { id: string } }) => {
// let posi =[2,1,3];
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
        <Getsoladd leaderboard={leaderboard} id={params.id} creator={creater} />
        <div className="flex-grow flex flex-col max-w-6xl mx-auto w-full">
          <div className="flex sm:flex-row justify-between mb-8">
            {/* Top 3 Players */}

            
            {leaderboard.slice(0, 3).map((player, index) => (
              <>
                <div key={player.id} className="flex-1 text-center">
                  <div className={`w-${index === 1 ? "20" : "16"} h-${index === 1 ? "20" : "16"} mx-auto mb-2 flex justify-center relative`}>


                    {/* crown icon */}
                    {index === 0 && <Crown className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-yellow-400" />}
                    {index === 1 && <Crown className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 text-yellow-400" />}
                    {index === 2 && <Crown className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-yellow-400" />}


                    <Image
                      src={player.igProfile || "https://scontent-bom2-3.cdninstagram.com/v/t51.2885-19/344094165_1428989347924242_319794666472247536_n.jpg?_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_cat=106&_nc_ohc=69fdG7tIAZUQ7kNvgFe1wjz&_nc_gid=1d23acb1c8ec474d8bcd80a74461f45f&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAbqi1jdiJKtiH2giMo4qa_DGQ12G1sKdz7g8OUhTGFkg&oe=672540CF&_nc_sid=7a9f4b"} // fallback for missing image
                      alt={player.solAdd}
                      width={index === 1 ? 90 : 64}
                      height={index === 1 ? 90 : 64}
                      className="rounded-lg"
                    />
                  </div>
                  <div className={`h-${index === 1 ? "44" : index === 0 ? "32" : "24"} bg-zinc-700 flex flex-col mt-4 m-1 sm:m-4 p-4 gap-2 rounded-t-lg`}>
                    
                    <h3 className="font-bold">{"RockStar"}</h3>
                    <div className="text-gray-400 h- text-sm">Earn {player.views} SOL</div>
                    {/* <div className="text-blue-400 font-bold">{creater.amount.toLocaleString()}</div> */}
                    {index == 0 && <div className="text-gray-400 text-sm"> <span className='font-bold text-yellow-300'>2nd </span> Position</div>}
                    {index == 1 && <div className="text-gray-400 text-sm"> <span className='font-bold text-yellow-300'>1st </span> Position</div>}
                    {index == 2 && <div className="text-gray-400 text-sm"><span className='font-bold text-yellow-300'>3rd </span> Position</div>}
                  </div>
                </div>
              </>
              
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

          {/* Status Bar */}
          <div className="bg-gray-900/50 rounded-full py-2 px-4 text-center text-sm text-gray-400">
            <span>You earned <span className="text-blue-400">50</span> today and are ranked - out of <span className="text-white">13868</span> users</span>
          </div>


          {/* Leaderboard Table */}
          <div className="overflow-x-auto flex-grow">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-sm">
                  <th className="text-left py-2">Place</th>
                  <th className="text-left py-2">Username</th>
                  <th className="text-right py-2">Views</th>
                  {/* <th className="text-right py-2">Prize</th> */}
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
                    {/* <td className="text-right text-blue-400">{creater.amount}</td> */}
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