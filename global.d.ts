// global.d.ts
interface Solana {
  isPhantom: boolean;
  isMobile?: boolean; 
  isConnected?: boolean; // Add this line
}

interface Window {
  solana?: Solana;
  isConnected?: boolean;
}