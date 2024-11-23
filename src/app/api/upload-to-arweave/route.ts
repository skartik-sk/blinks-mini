import { NextRequest, NextResponse } from "next/server";
import { Uploader } from "@irys/upload";
import { Solana } from "@irys/upload-solana";

const getIrysUploader = async () => {
  const irysUploader = await Uploader(Solana).withWallet(
    process.env.PRIVATE_KEY
  );
  return irysUploader;
};

export async function POST(req: NextRequest) {
  const irysUploader = await getIrysUploader();
  
  try {
    const { data } = await req.json(); 

    const bufferData = Buffer.from(data, 'utf-8'); 

    const receipt = await irysUploader.upload(bufferData); 
    
    console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    
 
    return NextResponse.json({ txid: `https://gateway.irys.xyz/${receipt.id}`,
    receipt:receipt });
  } catch (e) {
    console.error("Error when uploading ", e);

    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}