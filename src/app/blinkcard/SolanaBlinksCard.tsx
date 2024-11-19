'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ICreator } from '@/lib/interface/creater'
import { Clock, Trophy } from 'lucide-react'

export function SolanaBlinksCard({ content, id }: { content: ICreator; id: string }) {
  const daysLeft = content.end
    ? Math.max(0, Math.floor((new Date(content.end).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))
    : 'N/A'


    const getDashboardLink = () => {
      if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        if (hostname === 'localhost') {
          return `/dashboard/${id}`;
        } else {
          return `https://blinks.knowflow.study/dashboard/${id}`;
        }
      }
      return `https://blinks.knowflow.study/dashboard/${id}`;
    };

  return (
    <div className="relative w-full max-w-[22rem] min-w-80 rounded-xl overflow-hidden sm:w-[20rem] md:w-[25rem] bg-[#0a0a0a]/40 backdrop-blur-sm border border-white/5 font-mono shadow-xl">
      <div className="relative h-48">
        <Image
          src={content.icons}
          alt={content.title}
          layout="fill"
          objectFit="cover"
          className="brightness-90"
        />
        <div className="absolute top-2 left-2 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-md text-white/80 text-xs">
          #blinks
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
          <h2 className="text-xl font-bold text-white">
            {content.title}
          </h2>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2 text-pink-300">
            <Trophy className="w-4 h-4" />
            <span>Total Prize - ${content.amount}</span>
          </div>
          <div className="flex items-center space-x-2 text-purple-300">
            <Clock className="w-4 h-4" />
            <span>Days Left - {daysLeft}</span>
          </div>
        </div>

        <div className="text-center py-2 px-4 bg-[#1a1a1a]/40 rounded-lg backdrop-blur-sm">
          <span className="text-xs text-gray-400">
            Current participants: <span className="text-white font-medium">{content.users.length?content.users.length: 0 }</span> users
          </span>
        </div>

        <div className="space-y-2">
          <Link
            href={`https://dial.to/?action=solana-action:https://blinks.knowflow.study/api/donate/${id}&cluster=devnet`}
            className="block w-full py-2 text-center font-bold text-white rounded-lg bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7] hover:opacity-90 transition-all duration-300"
          >
            BLINK NOW
          </Link>
          <Link
            href={getDashboardLink()}
            className="block w-full py-2 text-center font-medium text-gray-400 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            VIEW LEADERBOARD
          </Link>
        </div>
      </div>
    </div>
  )
}

 // <div className='flex justify-center items-center p-2'>
      //   <div className="relative flex flex-col w-full max-w-[25rem] min-w-80 bg-black rounded-xl shadow-lg overflow-hidden sm:w-[20rem] md:w-[25rem]">
      //     <div className="relative h-48">
        
      //   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      //   <div className="absolute inset-0 flex flex-col justify-between p-4">
      //     <h2 className="text-xl font-bold text-white">{content.title}</h2>
      //     <h3 className="text-lg font-semibold text-white">Total Prize - {content.amount} SOL</h3>
      //   </div>
      //     </div>
      //     <div className="p-4 bg-black bg-opacity-70">
      //   <p className="text-gray-400 mb-4">{content.description}</p>
      //   <Link passHref={true} href={`https://dial.to/?action=solana-action:https://blinks.knowflow.study/api/donate/${id}&cluster=devnet`}>
      //     <button
      //       className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
      //     >
      //       Discover 0.1 SOL
      //       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 w-2/3 h-full transform -translate-x-full -translate-y-full animate-slide-diagonal"></div>
      //       <style jsx>{`
      //     @keyframes slide-diagonal {
      //       0% {
      //         transform: translateX(-100%) translateY(-0%);
      //       }
      //       100% {
      //         transform: translateX(200%) translateY(0%);
      //       }
      //     }
      //     .animate-slide-diagonal {
      //       animation: slide-diagonal 2s infinite;
      //     }
      //       `}</style>
      //     </button>
      //   </Link>
      //     </div>
      //   </div>
      // </div>