import React from 'react'
import Image from 'next/image'
import { Clock, Crown, Trophy } from 'lucide-react'
import connectDB from '@/lib/dbconnect'
import { IUser } from '@/lib/interface/user'
import User from '@/lib/models/user'
import Getsoladd from './getsoladd'
import { ICreator } from '@/lib/interface/creater'
import Creator from '@/lib/models/creater'

export default async function Page({ params }: { params: { id: string } }) {
  let leaderboard: IUser[] = []
  let creater: ICreator = {} as ICreator

  try {
    await connectDB()
    leaderboard = await User.find({ 'post': `https://blinks.knowflow.study/api/donate/${params.id}?amount=0.1` }).sort({ views: -1 })
    creater = await Creator.findById(params.id) as ICreator
  } catch (error) {
    console.error(error)
  }

  return (
    <div className="min-h-screen text-white p-4 sm:p-8 font-mono">
      <div className="max-w-4xl mx-auto space-y-8">
        <Getsoladd leaderboard={leaderboard} id={params.id} creator={creater} />
        
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7] text-transparent bg-clip-text">
            LEADERBOARD
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Top performers in the challenge
          </p>
        </div>

        {/* Podium */}
        <div className="relative h-[250px] sm:h-[300px]">
          {leaderboard.slice(0, 3).map((player, index) => (
            <div key={player.id} className={`absolute ${index === 1 ? 'left-1/2 bottom-8 transform -translate-x-1/2' : index === 0 ? 'left-0 sm:left-1/4 bottom-0 transform sm:-translate-x-1/2' : 'right-0 sm:left-3/4 bottom-0 transform sm:-translate-x-1/2'} flex flex-col items-center`}>
              <div className="relative mb-2">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${index === 1 ? 'sm:w-24 sm:h-24' : ''} rounded-lg overflow-hidden`}>
                  <Image
                    src={player.igProfile || "https://scontent-bom2-3.cdninstagram.com/v/t51.2885-19/344094165_1428989347924242_319794666472247536_n.jpg?_nc_ht=scontent-bom2-3.cdninstagram.com&_nc_cat=106&_nc_ohc=69fdG7tIAZUQ7kNvgFe1wjz&_nc_gid=1d23acb1c8ec474d8bcd80a74461f45f&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYAbqi1jdiJKtiH2giMo4qa_DGQ12G1sKdz7g8OUhTGFkg&oe=672540CF&_nc_sid=7a9f4b"}
                    alt={player.solAdd}
                    width={96}
                    height={96}
                    className="object-cover mix-blend-overlay"
                  />
                </div>
                {/* <Crown className={`absolute ${index === 1 ? '-top-6 w-10 h-10' : '-top-4 w-8 h-8'} left-1/2 transform -translate-x-1/2 text-yellow-400`} /> */}
              </div>
              <div className="bg-black/50 p-2 rounded text-xs sm:text-sm space-y-1">
                <p className="bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7] text-transparent bg-clip-text font-bold">
                  [{index + 1}] RockStar
                </p>
                <p className="flex items-center gap-1">
                  <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#ff6b95] to-[#a855f7] rounded-full" />
                  {player.views} SOL
                </p>
              </div>
              <div className={`w-24 sm:w-32 h-24 sm:h-32 ${index === 1 ? 'h-32 sm:h-40' : index === 2 ? 'h-20 sm:h-24' : ''} bg-gradient-to-r from-[#ff9a9e]/20 to-[#a855f7]/20 transform skew-y-[45deg] -z-10 absolute -bottom-12 sm:-bottom-16`} />
            </div>
          ))}
        </div>

        {/* Countdown Timer */}
        <div className="text-center pt-6 mb-6">
          <div className="flex items-center justify-center text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            <span>Ends in</span>
          </div>
          <div className="text-xl font-bold bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7] text-transparent bg-clip-text">00d 00h 43m 51s</div>
        </div>

        {/* Status Bar */}
        <div className="bg-gray-900/50 rounded-full py-2 px-4 text-center text-sm text-gray-400">
          <span>You earned <span className="text-[#ff6b95]">50</span> today and are ranked - out of <span className="text-white">13868</span> users</span>
        </div>

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-800">
                <th className="text-left p-2 sm:p-4">PLACE</th>
                <th className="text-left p-2 sm:p-4">USERNAME</th>
                <th className="text-right p-2 sm:p-4">VIEWS</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.slice(3).map((player, index) => (
                <tr key={player.id} className="border-b border-gray-800">
                  <td className="p-2 sm:p-4 flex items-center">
                    <Trophy className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7] text-transparent bg-clip-text">
                      {index + 4}
                    </span>
                  </td>
                  <td className="p-2 sm:p-4">{player.solAdd}</td>
                  <td className="p-2 sm:p-4 text-right flex items-center justify-end">
                    {player.views}
                    <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#ff6b95] to-[#a855f7] rounded-full ml-2" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};