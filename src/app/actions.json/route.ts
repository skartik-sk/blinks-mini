import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";


export const GET = async () => {

  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
        pathPattern: "/",
        apiPath: "/api/donate/",
      },
      //  {
      //   pathPattern: "/redirect/",
      //   apiPath: `/api/redirect/`,
      // },
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINKS
export const OPTIONS = GET;


export const POST = async () => {

  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
        pathPattern: "/",
        apiPath: "/api/donate?amount=0.1",
      },
      
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};