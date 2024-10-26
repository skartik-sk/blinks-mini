'use client';


import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLink } from '@fortawesome/free-solid-svg-icons';
import { ICreator } from '@/lib/interface/creater';
import { Badge } from '@/components/ui/badge';



export function SolanaBlinksCard({ content, id }: { content: ICreator, id: string }) {
    return (
        <Link passHref={true} href={`https://dial.to/?action=solana-action:https://blinks.knowflow.study/api/donate/${id}&cluster=devnet`}>
      <div className='flex justify-center items-center p-2'>
        <div className="flex flex-col w-full max-w-[25rem] min-w-80 bg-black rounded-xl shadow-lg overflow-hidden p-1 sm:w-[20rem] md:w-[25rem]">
          <div className="relative h-48">
            <div className='p-3'>
              <Image
                src={content.icons}
                alt="Solana Blinks"
                layout="fill"
                objectFit="cover"
                className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
          <div className="text-zinc-500 flex gap-2 mt-3">
            <FontAwesomeIcon icon={faLink} size="sm" />
            <p className='text-[13px] font-semibold'>knowflow.study</p>
          </div>
          <div className=''>
            <div className='flex flex-col gap-2 my-2'>
              <h2 className="text-xl font-bold text-white">{content.title}</h2>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-white">Total Prize - {content.amount} SOL</h3>
              </div>
            </div>
            <div className='my-2'>
              <h3 className="text-lg font-semibold mb-1 text-gray-400">Network Status</h3>
              <Badge variant="secondary" className="bg-green-900 text-green-100 hover:bg-green-800">
                Active
              </Badge>
            </div>
            <p className="text-gray-400 mb-4">{content.description}</p>
            <button
              className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
            >
              Participate 0.1 SOL
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
          </div>
        </div>
      </div>
        </Link>
    );
}