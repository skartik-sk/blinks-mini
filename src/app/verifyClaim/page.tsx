"use client";
import { useSearchParams } from "next/navigation";
import { title } from "process";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { ReclaimProofRequest } from "@reclaimprotocol/js-sdk";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

const APP_ID = "0x896b97E0915ae00C61D8bb88b9f6A76d273cfE76";
const APP_SECRET =
  "0xa24f2911de618188e78d5981f62a3bba7497bc87b1e1789bac933ec614ca11a8";
const PROVIDER_ID = "d18dcace-d59b-4432-b77e-655b7248334d";

interface irysdata {
  uid: string | null;
  likes: number;
  keyword: boolean;
}
export async function sendtoIrys(dataToSend: irysdata) {
  try {
    const response = await fetch("/api/upload-to-arweave", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log({ error });
  }
}

function extractAfterFavoriteCount(input: string): string | null {
  try {
    // Attempt to parse the input as JSON
    const parsed = JSON.parse(input);
    // If favorite_count exists in the parsed object, return its value
    return parsed?.extractedParameters?.favorite_count || null;
  } catch {
    // Fallback to regex if JSON parsing fails
    const match = input.match(/"favorite_count":"(.*?)"/);
    return match ? match[1] : null;
  }
}
function containsKeyword(input: string, ...keywords: string[]): boolean {
  // If no keywords are provided, return true
  if (keywords.length === 0) {
    return true;
  }

  // Check if all keywords are present in the input string
  return keywords.every((keyword) => {
    const regex = new RegExp(keyword, "i");
    return regex.test(input);
  });
}
function useUrl() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return url;
}
const Page = () => {
  const url = useUrl();
  // const { uid } = router;
  // const uid = "AAAA";
  // console.log(uid);
  const searchParams = useSearchParams();
  const uid = searchParams?.get("uid");
  const title = searchParams?.get("title");
  console.log(uid);
  // const uid = "aa";
  // const title = "hello";
  const [res, setRes] = useState("");
  const [deploying, setDeploying] = useState(false);
  const [qrState, setQrState] = useState<
    "none" | "loading" | "failed" | "waiting" | "success"
  >("success");
  const [qrUrl, setQrUrl] = useState("");

  const verifyOnReclaim = async () => {
    setQrState("loading");
    const reclaimProofRequest = await ReclaimProofRequest.init(
      APP_ID,
      APP_SECRET,
      PROVIDER_ID
    );
    const requestUrl = await reclaimProofRequest.getRequestUrl();
    if (requestUrl) {
      setQrUrl(requestUrl);
      setQrState("waiting");
    }
    await reclaimProofRequest.startSession({
      onSuccess: (proofs) => {
        console.log("Verification success", proofs);
        let likes = extractAfterFavoriteCount(proofs.claimData.context);
        let isKeyword = containsKeyword(
          proofs.claimData.context,
          "won",
          "@superteamin"
        );
        console.log(likes);
        if (likes && isKeyword) {
          const dataToSend = {
            uid: uid,
            likes: Number(likes),
            keyword: isKeyword,
          };
          sendtoIrys(dataToSend);
          setQrState("success");
        } else {
          setQrState("success");
        }

        setQrState("success");
        setRes(proofs.claimData.context);
      },
      // Called if there's an error during verification
      onError: (error) => {
        console.error("Verification failed", error);
      },
    });
  };

  return (
    <div className="min-h-screen pt-28 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 p-6">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl text-center font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
          {title || "Verification Page"}
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Secure your identity with futuristic verification.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center gap-6">
        <button
          disabled={qrState === "success"}
          onClick={verifyOnReclaim}
          className={`${
            qrState === "success" ? "cursor-not-allowed" : "cursor-auto"
          } relative group w-80 py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-900 font-medium tracking-wide shadow-lg`}
        >
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 opacity-30 blur group-hover:blur-md"></span>
          <span className="flex items-center justify-center relative z-10">
            <Twitter className="mr-3 w-5 h-5 text-gray-900" />
            Verify using Twitter Insights
          </span>
        </button>

        <button
          disabled={qrState === "success"}
          onClick={verifyOnReclaim}
          className={` ${
            qrState === "success" ? "cursor-not-allowed" : "cursor-auto"
          } relative group w-80 py-3 px-6 rounded-lg bg-gradient-to-r to-pink-500  from-purple-600  text-gray-900 font-medium tracking-wide shadow-lg`}
        >
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r to-pink-500  from-purple-600 opacity-30 blur group-hover:blur-md"></span>
          <span className="flex items-center justify-center relative z-10">
            <Instagram className="mr-3 w-5 h-5 text-gray-900" />
            Verify using Instagram Story
          </span>
        </button>
      </div>

      {/* QR Code Section */}
      <div className="mt-16 w-full max-w-md rounded-xl bg-black/40 backdrop-blur-lg p-6 border border-gray-700 shadow-lg">
        {qrState === "none" && (
          <p className="text-center text-gray-500">
            No QR code to display yet.
          </p>
        )}
        {qrState === "loading" && (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-t-cyan-400 border-gray-700 rounded-full animate-spin"></div>
            <p className="mt-4 text-sm text-gray-400">Loading QR code...</p>
          </div>
        )}
        {qrState === "failed" && (
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-red-500">
              Verification failed. Ensure your tweet includes the required
              keywords.
            </p>
            <img
              src="https://media.tenor.com/gOU1tVylWIYAAAAj/ness-good.gif"
              alt=""
            />
          </div>
        )}
        {qrState === "success" && !deploying && (
          <div className="text-center">
            <p className="text-lg text-cyan-400">
              Success! You’ve successfully participated.
            </p>
            <div className="mt-4 flex items-center justify-center">
              <img
                src="https://i.pinimg.com/originals/e0/ac/be/e0acbe0204a9611d6a33279f8b066522.gif"
                alt="Success Animation"
                // className="w-24 h-24"
              />
            </div>
          </div>
        )}
        {qrState === "waiting" && (
          <div className="flex flex-col items-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <QRCode value={qrUrl} />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-6 h-6 border-4 border-t-blue-500 border-gray-700 rounded-full animate-spin"></div>
              <p className="text-sm text-gray-400">Waiting for Proofs...</p>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Scan the QR code or click{" "}
              <Link href={qrUrl} className="text-gd  hover:underline">
                here
              </Link>{" "}
              to verify.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;