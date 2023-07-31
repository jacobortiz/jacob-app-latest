import { NextAuthOptions } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// import { CredentialsProvider } from "next-auth/providers";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
    providers: [
        // CredentialsProvider({
        //     name: "sign in",
        //     credentials: {
        //         email : {
        //             label: "email",
        //             type: "email",
        //             placeholder: "example@google.com",
        //         },
        //         password: { label: "password" ,type: "password"}
        //     },

        //     async authorize(credentials) {
        //         if(!credentials || !credentials.email || !credentials.password) return null
        //     }
        // }),

        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
}