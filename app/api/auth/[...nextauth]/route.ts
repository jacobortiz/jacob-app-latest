import NextAuth from "next-auth";
import Google from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_KEY as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    pages: {
        signIn: '/sign-in'
    }
})

export { handler as GET, handler as POST }