'use client';



import Link from 'next/link';

import { ICreator } from '@/lib/interface/creater';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';



export function SolanaBlinksCard({ content, id }: { content: ICreator, id: string }) {
    return (
        <div className={`
relative flex flex-col w-full max-w-[22rem] min-w-80 rounded-xl shadow-lg overflow-hidden sm:w-[20rem] md:w-[25rem]`} >
<Image src={content.icons} alt="background"
      layout="fill"
objectFit='cover'
  />
  <div className="relative min-h-80">
   
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    <div className="absolute inset-0 flex flex-col justify-between p-8">
      <div className='flex flex-col space-y-4 '>

      <h2 className="text-xl font-bold text-white"> {content.description.length > 20 ? `${content.description.substring(0, 25)}...` : content.description}
      </h2>
    <p className="text-gray-400 mb-4">
      {content.description.length > 100 ? `${content.description.substring(0, 100)}...` : content.description}
    </p>
      </div>
      <div className=''>

<div className='flex w-full justify-between'>

<Badge className='text-black my-3' variant={'prize'}>Total Prize - {content.amount}$</Badge>
<Badge className='text-black my-3' variant={'time'}>Days Left - {content.end ? Math.floor((new Date(content.end).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : "N/A"}</Badge>
</div>

    <Link passHref={true} href={`https://dial.to/?action=solana-action:https://blinks.knowflow.study/api/donate/${id}&cluster=devnet`}>
      <button
        className="relative bg-gradient-to-r from-gray-500 to-grey-600 text-white py-2 px-4 rounded-xl shadow-lg hover:from-gray-600 hover:to-grey-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
        >
        Blink
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 w-2/3 h-full transform -translate-x-full -translate-y-full animate-slide-diagonal"></div>
        <style jsx>{`
          @keyframes slide-diagonal {
            0% {
              transform: translateX(-100%) translateY(-0%);
              }
              100% {
                transform: translateX(200%) translateY(0%);
                }
                }
                .animate-slide-diagonal {
                  animation: slide-diagonal 2s infinite;
                  }
                  `}</style>
      </button>
    </Link>
    <div className='h-3'></div>
    <Link passHref={true} href={`https:blinks.knowflow.study/dashboard/${id}`}>
      <button
        className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-xl shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
        >
        Leaderboard
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 w-2/3 h-full transform -translate-x-full -translate-y-full animate-slide-diagonal"></div>
        <style jsx>{`
          @keyframes slide-diagonal {
            0% {
              transform: translateX(-100%) translateY(-0%);
              }
              100% {
                transform: translateX(200%) translateY(0%);
                }
                }
                .animate-slide-diagonal {
                  animation: slide-diagonal 2s infinite;
                  }
                  `}</style>
      </button>
    </Link>
                  </div>

    </div>
  </div>
  
<div></div>

        </div>
     
    );
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