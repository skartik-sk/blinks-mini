// global.d.ts
interface Solana {
    isPhantom: boolean;
  }
  
  interface Window {
    solana?: Solana;
  }