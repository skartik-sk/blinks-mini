'use client'
import {  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ConnectPhantomWallet() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);



  // Check if Phantom Wallet is installed
  const isPhantomInstalled = () => {
    return typeof window !== 'undefined' && window.solana && (window.solana.isPhantom || window.solana.isMobile);
  };

  // Connect Phantom Wallet
  const connectPhantomWallet = async () => {
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
    } else {
      alert('Phantom Wallet not installed. Please install it.');
    }
  };


  const handleCopy = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress)
        .then(() => {
          setCopySuccess(true);
          setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    }
  };

  return (
    <main className="bg-[#000000] shadow-lg rounded-lg p-0 sm:p-6 max-w-[20rem] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center ">
      <h1 className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-white to-gray-500 mb-4">
        Phantom Wallet Connection
      </h1>
    
      {!walletAddress ? (
        <button 
          onClick={connectPhantomWallet} 
          className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-4 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
        >
          Connect Phantom Wallet
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 transform -translate-x-full animate-slide"></div>
          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
            .animate-slide {
              animation: slide 2s infinite;
            }
          `}</style>
        </button>
      ) : (
        <div className="bg-[#000000] p-1 sm:p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
          <p className="text-green-600 font-semibold mb-2">Connected:</p>
          <div className='sm:flex sm:justify-center'>
            <p 
              className="text-green-600 font-semibold break-words cursor-pointer" 
              onClick={handleCopy}
            >
              {copySuccess ? 'Copied!' : walletAddress}
            </p>
            <FontAwesomeIcon 
                  icon={faCopy} 
                  className="ml-2 text-blue-500 cursor-pointer" 
                  onClick={handleCopy} 
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-2 mt-6">
          <Link  href="/creatordashboard">
            <button 
           
              className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
            >
              Login As Creator
            </button> </Link>
            <Link  href="/dashboard">
            <button 
              className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full"
              >
              Login As User
            </button>
              </Link>
          </div>
        </div>
      )}
    </main>
  );
}