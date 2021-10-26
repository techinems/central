import axios from "axios";
import NextAuth, { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { getRampartToken, hasWebsiteAccount } from "../../../utils/backend/auth";

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
      // Get whether or not they're a new user so we can show them the create user dialog
      if (token.sub) {
        token.isNewUser = await hasWebsiteAccount(token.sub);
      }
      // If they have a website account populate the rampart token
      if (token.sub && !token.isNewUser) {
        token.rampartToken = await getRampartToken(token.sub);
      }
      return token;
    },
    async session({session, token}): Promise<Session> {
      // Enrich the session with the user's google account ID
      session.googleId = token.sub;
      // It's important to know if the user is new so we can show them the create account page
      if (token.isNewUser !== undefined) {
        session.isNewUser = token.isNewUser;
      }
      return session;
    }
  },
  // Set the secrets for the application
  secret: process.env.GOOGLE_CLIENT_SECRET || 'dev',
  jwt : { secret: process.env.GOOGLE_CLIENT_SECRET || 'dev' },
});