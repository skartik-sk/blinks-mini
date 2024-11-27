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
  const uid = "AAAA";
  console.log(uid);
  const searchParams = useSearchParams();
  // const uid = searchParams?.get("uid");
  const title = searchParams?.get("title");
  console.log(uid);
  // const uid = "aa";
  // const title = "hello";
  const [res, setRes] = useState("");
  const [deploying, setDeploying] = useState(false);
  const [qrState, setQrState] = useState<
    "none" | "loading" | "failed" | "waiting" | "success"
  >("none");
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
    <div
      style={{ textAlign: "center", padding: "20px" }}
      className="mt-40 text-white "
    >
      <h1 className="text-xl font-bold capitalize">
        {title || "Verification Page"}
      </h1>

      <div
        className="flex flex-col justify-center items-center "
        style={{ margin: "20px 0" }}
      >
        <button
          onClick={verifyOnReclaim}
          className="w-80 mb-4 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
          style={{
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",

            cursor: "pointer",
          }}
        >
          <Instagram className="mr-2 h-4 w-4" /> Verify using Instagram Story
        </button>

        <Button
          onClick={verifyOnReclaim}
          className="mb-4 w-80 flex items-center justify-center "
          style={{
            backgroundColor: "#1DA1F2", // Twitter brand color
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",

            cursor: "pointer",
          }}
        >
          {" "}
          <Twitter className="mr-2 relative bottom-[2px] h-4 w-4" /> Verify
          using Twitter Insights
        </Button>
      </div>

      <div
        className="text-white flex justify-center items-center"
        style={{ marginTop: "30px" }}
      >
        {qrState === "none" && <p>No QR code to display yet.</p>}
        {qrState === "loading" && <p>Loading QR code...</p>}
        {qrState === "failed" && (
          <p>
            Verification failed, You do not have required keywords in your tweet
          </p>
        )}
        {qrState === "success" && deploying && <p>Sucess! {res}</p>}
        {qrState === "success" && !deploying && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p>Sucess! You successfully pariticpated </p>
            <img
              src="https://i.pinimg.com/originals/e0/ac/be/e0acbe0204a9611d6a33279f8b066522.gif"
              alt=""
            />
          </div>
        )}
        {qrState === "waiting" && (
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
              <QRCode value={qrUrl} />
            </div>
            <div className="mt-2 flex gap-2 justify-center items-center">
              <React.Fragment>
                <svg width={0} height={0}>
                  <defs>
                    <linearGradient
                      id="my_gradient"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FF999E" />
                      <stop offset="100%" stopColor="#AE56F1" />
                    </linearGradient>
                  </defs>
                </svg>
                <CircularProgress
                  thickness={5}
                  sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
                />
              </React.Fragment>
              <>
                <p>Waiting for Proofs!</p>
              </>
            </div>
            <p className="mt-2">
              Scan this QR or click
              <Link
                className="underline bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
                href={qrUrl}
              >
                {" "}
                here
              </Link>{" "}
              to verify
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
