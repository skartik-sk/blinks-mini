'use client'
import QRCode from "react-qr-code";
import { ReclaimProofRequest  } from "@reclaimprotocol/js-sdk";

import React, { useState } from 'react'


const page = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState({});

    async function main() {

 
  
        const APP_ID = '0xB77b55d564aECB6D955fEa5480967A451282b530'
        const APP_SECRET = '0xe3cf75c5aa1767add18dfa964e15f8660b4296fa3b8a5e966da63158c085af17'
        const PROVIDER_ID = '5dbf61bc-1b14-454c-9c16-bbe4dcf262f6'
       
        const reclaimProofRequest = await ReclaimProofRequest.init(APP_ID, APP_SECRET, PROVIDER_ID)
       
        
    
        const requestUrl = await reclaimProofRequest.getRequestUrl()
        console.log('Request URL:', requestUrl)
        setUrl(requestUrl)        
       
        const statusUrl = reclaimProofRequest.getStatusUrl()
        console.log('Status URL:', statusUrl)
       
        await reclaimProofRequest.startSession({       
          onSuccess: (proofs) => {
            setData(proofs)
            console.log('Verification success', proofs)
          },
          onError: (error) => {
            console.error('Verification failed', error)
          }
        })
      }
       


  const getVerificationReq = () =>{
    main().catch(console.error)
  }
   
   
  return (
    <div><div className='bg-[#110d1e] flex flex-col items-center pt-16 h-screen'>
   
    <h1 className="text-center pt-6 text-white font-bold">
      Verify on Reclaim portal
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}>
        {!url && (
          <button onClick={getVerificationReq}>
            Create Claim QrCode
          </button>
        )}
        {url && (
          <>
            <div className='flex flex-col items-center gap-5'>
              <QRCode value={url} />
              <a href={url}>
                <button className='bg-slate-900 p-4 rounded hover:bg-slate-600 active:scale-[.85] transition-all duration-200 ease-in-out text-white'>
                  Verify on Reclaim
                </button>
              </a>
            </div>
          </>
        )}
        {url && data && (
            <div>
                <h2>Verificaton Successful</h2>
                <p>{JSON.stringify(data)}</p>
            </div>
        )}
      </div>
    </h1>
  </div></div>
  )
}

export default page