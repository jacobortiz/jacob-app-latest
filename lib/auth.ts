import { NextAuthOptions } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// import { CredentialsProvider } from "next-auth/providers";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    pages: {
        signIn: '/sign-in',
    }
}