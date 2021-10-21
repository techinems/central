import axios from "axios";
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
      if (process.env.NEXT_PUBLIC_RAMPART_URL && token.sub) {
        let isNewUser = true;
        try {
          isNewUser = (await axios.get<{isNewUser: boolean}>(`${process.env.NEXT_PUBLIC_RAMPART_URL}/metadata/isNewUser/${token.sub}`)).data.isNewUser;
          token.isNewUser = isNewUser;
        } catch (err) {
          console.error(err);
        }
      }
      return token;
    },
    async session({session, token}): Promise<Session> {
      // Enrich the session with the user's google account ID
      session.googleId = token.sub;
      // It's important to know if the user is new so we can show them the create account page
      if (token.isNewUser) {
        session.isNewUser = token.isNewUser;
      }
      return session;
    }
  },
  // Set the secrets for the application
  secret: process.env.GOOGLE_CLIENT_SECRET || 'dev',
  jwt : { secret: process.env.GOOGLE_CLIENT_SECRET || 'dev' },
});