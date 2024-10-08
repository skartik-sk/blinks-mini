
# DASHH - Decentralized Engagement Platform

DASHH is a decentralized platform that revolutionizes influencer marketing. By leveraging the **Reclaim Protocol** and **Solana Blinks**, we ensure transparency, fairness, and real engagement verification. Brands can create campaigns, and influencers are rewarded based on genuine interaction data, eliminating intermediaries and promoting trust through blockchain technology.

## 🌟 Why DASHH?

- **Transparency & Accountability**: Verified engagement through the Reclaim Protocol, ensuring real data and eliminating fake views.
- **Decentralized Influencer Marketing**: Rewards are distributed fairly, based on true engagement, not follower count.
- **Sybil Resistance**: Protects against fake accounts and bots by verifying participant identity and reputation.
- **On-Chain Trust**: Payments are securely handled through on-chain escrow contracts, ensuring safe and transparent payouts.

---

## 🚀 Getting Started

To run this project locally:

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev

# Or using bun
bun dev
```

## 📈 How DASHH Works

### 1. **Campaign Creation**
Brands set up campaigns, allocate a budget, and share them through Solana Actions using Reclaim Protocol for Instagram verification and zkTLS proof to ensure privacy and security.

### 2. **User Participation**
Influencers connect their wallets, verify their Instagram account via Reclaim, and participate by posting stories that will generate real engagement.

### 3. **Engagement Proof**
Reclaim Protocol collects engagement data (e.g., Instagram views) and generates zkTLS proofs, ensuring that the engagement is real and verified.

### 4. **Payment Distribution**
Once engagement is verified, payments are processed through a secure escrow smart contract on Solana, ensuring influencers are rewarded fairly and without delay.

---

## 🛠 Platform Integration

- **URL Scheme**: Define actions using the `solana-action:` URL scheme.
- **Handling Requests**: Ensure your platform can handle GET and POST requests properly with valid headers for CORS compliance.
- **Response Metadata**: Return necessary metadata, including a signable transaction or message, for wallets to process.

---

## 📊 Execution Flow

1. **Campaign Setup** → **Reclaim Verification** → **Solana Action (Blink URL)**
2. **User Participation** → **Reclaim Proof** → **Instagram Engagement**
3. **Proof Collection** → **zkTLS Proof** → **Blink URL Submission**
4. **Payout** → **Escrow Smart Contract Verification** → **Funds Released**

---

## 🌐 Causes We Serve

- **Fair Compensation**: Influencers are paid based on real engagement, not just follower numbers.
- **Data Ownership**: Influencers retain control of their data, with cryptographic proof provided by Reclaim.
- **Automation & Trust**: Payments are automated and secured through blockchain, eliminating the need for intermediaries.
