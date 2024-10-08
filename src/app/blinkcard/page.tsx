'use client';


import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLink } from '@fortawesome/free-solid-svg-icons';



export default function SolanaBlinksCard() {
  return (
    <div className='flex justify-center items-center m-2'>
            <div className="flex flex-col w-[25rem] bg-gray-800 rounded-xl shadow-lg overflow-hidden p-5 ">
                <div className="relative h-48 w-full">
                    <div className='p-3'>
                        <Image 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGL900faIVEi7eoR4udlOMS75hg1nVxICrQ&s"
                            alt="Solana Blinks" 
                            layout="fill" 
                            objectFit="cover" 
                            className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105 "
                        />
                    </div>
                </div>
                <Link href="#" className="text-zinc-500 flex gap-2 mt-3">
                    <FontAwesomeIcon icon={faLink} size="sm" />
                    <p className='text-[13px] font-semibold'>boostit.io</p>
                </Link>
                {/* #9886E5 */}
                <div className="">
                    <h2 className="text-xl font-bold text-white my-2">Solana Blinks</h2>
                    <p className="text-gray-400  mb-4">Discover the unique features of Solana Blinks. Connect your Phantom Wallet to get started.</p>
                    <button 
                    className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-full shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
                    >
                    Send 0.1 SOL
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 w-1/3 h-full transform -translate-x-full -translate-y-full animate-slide-diagonal"></div>
                    <style jsx>{`
                        @keyframes slide-diagonal {
                        0% {
                            transform: translateX(-100%) translateY(-100%);
                        }
                        100% {
                            transform: translateX(100%) translateY(100%);
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
  );
}