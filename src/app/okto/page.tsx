"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";

import axios from "axios";

// const  { authenticate } = useOkto() as OktoContextType;

const getWallet = async (auth_token: string) => {
  const url = "https://sandbox-api.okto.tech/api/v1/wallet";
  const options = {
    method: "GET",
    headers: { Authorization: "Bearer YOUR_SECRET_TOKEN" },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
const Logout = async (auth_token: string) => {
  const url = "https://sandbox-api.okto.tech/api/v1/logout";
  const options = {
    method: "POST",
    headers: { Authorization: `Bearer ${auth_token} ` },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

type TransferResponse = {
  // Define the expected structure of the API response
  status: string;
  message?: string;
  data?: any; // Replace `any` with a more specific type if known
};

async function executeTokenTransfer(
  networkName: string,
  tokenAddress: string,
  quantity: string,
  recipientAddress: string,
  auth_token:string
): Promise<TransferResponse> {
  const url = "https://sandbox-api.okto.tech/api/v1/transfer/tokens/execute";

  const body = JSON.stringify({
    network_name: networkName,
    token_address: tokenAddress,
    quantity: quantity,
    recipient_address: recipientAddress,
  });

  const options: RequestInit = {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_SECRET_TOKEN", 
    },
    body: body,
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: TransferResponse = await response.json();
    console.log("Transfer successful:", data);
    return data; // Return data for further use
  } catch (error) {
    console.error("Error executing token transfer:", error);
    throw error; // Rethrow error for the caller to handle
  }
}

const createWalletOkto = async (auth_token: string) => {
  const url = "https://sandbox-api.okto.tech/api/v1/user_from_token";
  const options = {
    method: "GET",
    headers: { Authorization: `Bearer ${auth_token} ` },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

const SignInButton = () => {
  const { data: session } = useSession(); // Access session data

  const signInWithGoogle = async () => {
    await signIn("google"); // Redirect after sign-in
  };
  const authenticate = async (idToken: string) => {
    const options = {
      method: "POST",
      url: "https://sandbox-api.okto.tech/api/v1/authenticate",
      headers: {
        "X-Api-Key": "29a05be2-5fca-4132-8a4e-805fdcad83b0",
        // Authorization: "Vendor jwt token",
        "Content-Type": "application/json",
      },
      data: { id_token: idToken },
    };

    try {
      const { data } = await axios.request(options);
      createWalletOkto(data.auth_token);
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const authenticate2 = async () => {
      if (session) {
        // Access the token from the session
        const idToken = session.idToken;
        idToken != null && authenticate(idToken);
        console.log(idToken);
        if (!idToken) {
          console.error("No ID token found in session");
          return;
        }
      }
    };

    authenticate2();
  }, [session]);

  return (
    <button className="mt-40 p-4 bg-white" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
};

export default SignInButton;
