<<<<<<< HEAD
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    idToken?: string; // Change accessToken to idToken
  }

  interface JWT {
    idToken?: string; // Change accessToken to idToken
  }
}

// Define the authentication options
 const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "openid email profile", // Include openid in scope
        },
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // Pass id_token to session
      session.idToken = token.idToken as string | undefined;
      console.log(session);
      return session;
    },
    async jwt({ token, account }) {
      // Persist id_token in the token object
      if (account) {
        token.idToken = account.id_token as string | undefined; // Access id_token from account
      }
      return token;
    },
  },
};

// Export the NextAuth handler
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
=======
  import NextAuth, { NextAuthOptions } from "next-auth";
  import GoogleProvider from "next-auth/providers/google";
  declare module "next-auth" {
    interface Session {
      accessToken?: string;
    }
  
    interface JWT {
      accessToken?: string;
    }
  }
  // Define the authentication options
  export const authOptions: NextAuthOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      }),
    ],
    callbacks: {
      async session({ session, token }) {
        // Explicitly type session and token
        session.accessToken = token.accessToken as string | undefined;
        console.log(session);
        return session;
      },
      async jwt({ token, account }) {
        // Persist the access_token in the token object
        if (account) {
          token.accessToken = account.access_token as string | undefined;
        }
        return token;
      },
    },
  };

  // Export the NextAuth handler
  const handler = NextAuth(authOptions);
  export { handler as GET, handler as POST };
>>>>>>> main
