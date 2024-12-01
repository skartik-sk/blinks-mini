// next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string; // Add accessToken property
    user: {
      email: string;
      name: string;
      image: string;
    } & DefaultUser; // Extend user properties as needed
  }
}