// global.d.ts
interface Solana {
  isPhantom: boolean;
  isMobile?: boolean;  // Add this line
}

interface Window {
  solana?: Solana;
}