import * as anchor from '@coral-xyz/anchor'
import {Program} from '@coral-xyz/anchor'
import {Keypair, PublicKey} from '@solana/web3.js'
import {Dashh} from '../target/types/dashh'
import { BankrunProvider, startAnchor } from 'anchor-bankrun'
import { randomUUID } from 'crypto'
const IDL = require('../target/idl/dashh.json')
const campaign_address = new PublicKey("AsjZ3kWAUSQRNt2pZVeJkywhZ6gpLpHZmJjduPmKZDZZ")

describe('dashh', () => {
  // Configure the client to use the local cluster.
  // const provider = anchor.AnchorProvider.env()
  // anchor.setProvider(provider)
  // const payer = provider.wallet as anchor.Wallet

  // const program = anchor.workspace.Dashh as Program<Dashh>

  const dashhKeypair = Keypair.generate()
  let context;
let provider;
let dashhProgram: Program<Dashh>;
  beforeAll(async () => {
     context = await startAnchor("", [{
      name: "dashh",
      programId: campaign_address,
    }], []);
	 provider = new BankrunProvider(context);
 dashhProgram = new Program<Dashh>(IDL, provider);

});


const id = new anchor.BN(randomUUID().split("-").join("").slice(0, 8), 16);
it('Initialize campaign', async () => {
await dashhProgram.methods.createCampaign(
  id,
  "Test knowflow",
  "https://images.unsplash.com/photo-1719937206667-ac87c15ad3e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "this is only for testing in and out",
"0x0",
new anchor.BN(1832639258),
new anchor.BN(1000),
).rpc();

const [campaignAddress]=PublicKey.findProgramAddressSync([id.toArrayLike(Buffer, 'le', 8)],campaign_address);

const campaign = await dashhProgram.account.campaign.fetch(campaignAddress);
console.log("campaign", campaign);

// expect(campaign.campaignId.toNumber()).toEqual(1);
// expect(campaign.description).toEqual("What is your favorite color?");
// expect(campaign.campaignSatrt.toNumber()).toBeLessThan(campaign.campaignEnd.toNumber())

})



it('participate in campaign', async () => {
  
  await dashhProgram.methods.createParticipent(
    id,
    dashhKeypair.publicKey,
  ).rpc();
  
  const [participantAddress]=PublicKey.findProgramAddressSync([id.toArrayLike(Buffer, 'le', 8),dashhKeypair.publicKey.toBuffer()],campaign_address);
  
  const participant = await dashhProgram.account.participent.fetch(participantAddress);
  console.log("participant", participant);
  
  // expect(campaign.campaignId.toNumber()).toEqual(1);
  // expect(campaign.description).toEqual("What is your favorite color?");
  // expect(campaign.campaignSatrt.toNumber()).toBeLessThan(campaign.campaignEnd.toNumber())
  
  })

  it('updates in participant', async () => {
    await dashhProgram.methods.updatedParticipent(
      id,
      dashhKeypair.publicKey,
      new anchor.BN(100),
    ).rpc();
    
    const [participantAddress]=PublicKey.findProgramAddressSync([id.toArrayLike(Buffer, 'le', 8),dashhKeypair.publicKey.toBuffer()],campaign_address);
    
    const participant = await dashhProgram.account.participent.fetch(participantAddress);
    console.log("participant", participant);
    console.log("points", participant.points.toNumber());
    expect(participant.points.toNumber()).toEqual(100);
    // expect(campaign.campaignId.toNumber()).toEqual(1);
    // expect(campaign.description).toEqual("What is your favorite color?");
    // expect(campaign.campaignSatrt.toNumber()).toBeLessThan(campaign.campaignEnd.toNumber())
    
    })

  
})
