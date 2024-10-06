// import { useState, useEffect } from 'react'
// import "./App.css";
// import { ReclaimProofRequest } from "@reclaimprotocol/js-sdk";
// import QRCode from "react-qr-code";
// import logo from"../public/assests/unnamed.png"

// function App() {
//   const [url, setUrl] = useState('');
//   const [data, setData] = useState({});

//   const getVerificationReq = async () => {
//     const APP_ID = "0xB77b55d564aECB6D955fEa5480967A451282b530";
//     const reclaimClient = new ReclaimProofRequest(APP_ID);
//     const providerId = "5dbf61bc-1b14-454c-9c16-bbe4dcf262f6";
//     await reclaimClient.buildProofRequest(providerId);
    
//     const APP_SECRET = '0xe3cf75c5aa1767add18dfa964e15f8660b4296fa3b8a5e966da63158c085af17';


//     reclaimClient.setSignature(
//       await reclaimClient.generateSignature(APP_SECRET)
//         )

//     const { requestUrl, statusUrl } = await reclaimClient.createVerificationRequest();
//     setUrl(requestUrl);
  
//     await reclaimClient.startSession({
//       onSuccessCallback: proof => {
//         setData(JSON.parse(proof[0].claimData.context))
        
//         console.log('Verification success', data);
//         console.log('Verification success', proof[0].claimData.context);
//       },
//       onFailureCallback: error => {
//         console.error('Verification failed', error);
//       }
//     });
//   };
  
//   return (
//     <div className='bg-[#110d1e] flex flex-col items-center pt-16 h-screen'>

//       <h1 className="text-center pt-6 text-white font-bold">
//         Verify on Reclaim portal
//         <div style={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           height: "50vh",
//         }}>
//           {!url && (
//             <button onClick={getVerificationReq}>
//               Create Claim QrCode
//             </button>
//           )}
//           {url && (
//             <>
//               <div className='flex flex-col items-center gap-5'>
//                 <QRCode value={url} />
//                 <a href={url}>
//                   <button className='bg-slate-900 p-4 rounded hover:bg-slate-600 active:scale-[.85] transition-all duration-200 ease-in-out text-white'>
//                     Verify on Reclaim
//                   </button>
//                 </a>
//               </div>
//             </>
//           )}
//         </div>
//       </h1>
//     </div>
//   );
// }

// export default App;
