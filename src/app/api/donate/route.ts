import { ActionGetResponse, ActionPostRequest, ActionPostResponse, ACTIONS_CORS_HEADERS } from "@solana/actions";
import { clusterApiUrl, Connection, ConnectionConfig, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, Keypair } from "@solana/web3.js";
import fs from 'fs';

function loadPayerKeypair(): Keypair {
    const secretKeyString = fs.readFileSync('path/to/payer.json', 'utf8');
    const secretKey = Uint8Array.from(JSON.parse(secretKeyString));
    return Keypair.fromSecretKey(secretKey);
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const payload: ActionGetResponse = {
        icon: "https://instagram.fbho3-4.fna.fbcdn.net/v/t51.2885-19/344094165_1428989347924242_319794666472247536_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fbho3-4.fna.fbcdn.net&_nc_cat=106&_nc_ohc=EWLNdoJWV4IQ7kNvgEYR9wa&_nc_gid=28bc22d4a71f4a998b6201b6141396ba&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYC2vVUcPuINfMw18GB5pbeekHEJDPbhs7M6MwvyT6oLSg&oe=6708078F&_nc_sid=8b3546",
        title: "Donate to pranesh",
        description: "Donate to the Solana Foundation to support the Solana ecosystem.",
        label: "Donate",
        links: {
            actions: [
                {
                    type: "transaction",
                    label: "Donate 0.1 Sol",
                    href: `${url.href}?amount=0.1`,
                },
            ]
        }
    };

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}
export const OPTIONS = GET;

export async function POST(request: Request) {
    const body: ActionPostRequest = await request.json();
    const url = new URL(request.url);
    const amount = Number(url.searchParams.get("amount")) || 0.2;

    let sender;
    try {
        sender = new PublicKey(body.account);
        console.log("sender add" + sender);
    } catch (e) {
        return Response.json({ error: e }, { status: 400, headers: ACTIONS_CORS_HEADERS });
    }

    const connectionConfig: ConnectionConfig = {
        commitment: "confirmed",
        confirmTransactionInitialTimeout: 60000 // Customize the timeout to 60 seconds
    };
    const connection = new Connection(clusterApiUrl("devnet"), connectionConfig);
    const payer = loadPayerKeypair(); // Load the payer Keypair from file

    async function sendTransactionWithRetry(transaction: Transaction): Promise<string> {
        try {
            const signature = await connection.sendTransaction(transaction, [payer]);
            await connection.confirmTransaction(signature);
            return signature;
        } catch (error) {
            console.error("Transaction failed, retrying...", error);
            const blockheight = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockheight.blockhash;
            transaction.lastValidBlockHeight = blockheight.lastValidBlockHeight;
            transaction.sign(payer);
            return sendTransactionWithRetry(transaction);
        }
    }

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: sender,
            toPubkey: new PublicKey("9cV3D54tgGDxwXZeKUPt634diseVQETo56HoHejy6tAA"),
            lamports: amount * LAMPORTS_PER_SOL,
        })
    );

    const blockheight = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockheight.blockhash;
    transaction.lastValidBlockHeight = blockheight.lastValidBlockHeight;
    transaction.feePayer = sender;
    transaction.sign(payer);

    const signature = await sendTransactionWithRetry(transaction);

    const payload: ActionPostResponse = {
        type: "transaction",
        transaction: transaction.serialize({ verifySignatures: false }).toString("base64"),
        message: `Transaction created with signature: ${signature}`,
    };

    return Response.json(payload, {
        headers: ACTIONS_CORS_HEADERS,
    });
}