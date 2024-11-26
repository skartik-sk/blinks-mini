// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { Cluster, PublicKey } from '@solana/web3.js'
import DashhIDL from '../target/idl/dashh.json'
import type { Dashh } from '../target/types/dashh'

// Re-export the generated IDL and type
export { Dashh, DashhIDL }

// The programId is imported from the program IDL.
export const DASHH_PROGRAM_ID = new PublicKey(DashhIDL.address)

// This is a helper function to get the Dashh Anchor program.
export function getDashhProgram(provider: AnchorProvider) {
  return new Program(DashhIDL as Dashh, provider)
}

// This is a helper function to get the program ID for the Dashh program depending on the cluster.
export function getDashhProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
      // This is the program ID for the Dashh program on devnet and testnet.
      return new PublicKey('CounNZdmsQmWh7uVngV9FXW2dZ6zAgbJyYsvBpqbykg')
    case 'mainnet-beta':
    default:
      return DASHH_PROGRAM_ID
  }
}
