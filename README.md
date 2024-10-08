
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

---

## 🚀 Use Case: Decentralized Marketing with DASHH

### 1. **No Middlemen, Direct Payments**
- Brands bid on Instagram engagement through Solana Blinks.
- Payments are made directly to influencers via smart contracts, eliminating intermediary fees.

### 2. **Real-Time Transparency**
- Track every view, like, and interaction on-chain.
- Solana's high throughput ensures real-time campaign performance updates without bottlenecks.

### 3. **Smart Contract Automation**
- Automatic payments based on pre-defined metrics (e.g., 10,000 views).
- Solana’s fast block finality ensures instant payouts upon reaching campaign goals.

### 4. **Fraud Reduction with Verified Engagement**
- Authentic engagement guaranteed using Reclaim Protocol's zkTLS proofs.
- Protects against bot-driven ad fraud, ensuring real interactions.

### 5. **User Privacy and Data Ownership**
- Influencers control their data and can monetize engagement metrics.
- Ethical, transparent advertising without compromising personal privacy.

## 🔗 Powered by Solana
- **Low Fees**: Microtransactions with minimal cost.
- **High Speed**: Real-time updates and payments without delays.
- **Scalable**: Supports large-scale campaigns effortlessly.

DASHH is the future of decentralized advertising, offering transparency, trust, and efficiency through Solana’s powerful blockchain technology.