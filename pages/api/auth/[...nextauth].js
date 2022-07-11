import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
//TODO: Need to handle cases where user denies access during auth process
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      // Create authorisation url
      authorization: {
        params: {
          prompt: 'consent',
          response_type: 'code',
          // Admin access to youtube account
          scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
        }
      }
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token;
    }
  },
  async session({ session, token }) {
    session.accessToken = token.access_token

    return session;
  }
});