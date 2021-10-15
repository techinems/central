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
      // Enrich the session with the user's google account ID
      session.googleId = token.sub;
      return session;
    }
  },
  secret: process.env.GOOGLE_CLIENT_SECRET || 'dev'
});