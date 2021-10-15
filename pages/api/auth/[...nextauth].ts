import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

/**
 * Sets up the Next Auth backend API to handle google login
 */
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ],
  callbacks: {
    async jwt({token}): Promise<JWT> {
      return token;
    },
    async session({session, token}): Promise<Session> {
      return session;
    }
  },
  secret: process.env.GOOGLE_CLIENT_SECRET || 'dev'
});