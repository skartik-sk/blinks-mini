'use client'
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default function ConnectPhantomWallet() {
  const [walletAddress, setWalletAddress] = useState(null);
  const router = useRouter();


  // Check if Phantom Wallet is installed
  const isPhantomInstalled = () => {
    return typeof window !== 'undefined' && window.solana && window.solana.isPhantom;
  };

  // Connect Phantom Wallet
  const connectPhantomWallet = async () => {
    if (isPhantomInstalled()) {
      try {
        const { solana } = window;
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

  const handleCreator = () => {
    router.push('/form');
  }

  return (
    <main className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Phantom Wallet Connection</h1>

        {!walletAddress ? (
          <button 
            onClick={connectPhantomWallet} 
            className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Connect Phantom Wallet
          </button>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <p className="text-green-600 font-semibold mb-2">Connected:</p>
            <p className="text-green-600 font-semibold break-words">{walletAddress}</p>
            <div className="flex justify-between gap-2 mt-6">
              <button 
                onClick={handleCreator} 
                className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
              >
                Login As Creator
              </button>
              <button 
                className="bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full"
              >
                Login As User
              </button>
            </div>
          </div>
          
        )}
      </main>
  );
}