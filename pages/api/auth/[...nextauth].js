import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
          scope: 'openid https://www.googleapis.com/auth/youtube.force-ssl'
        }
      }
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user, account }) {
      // include access token inside jwt upon signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    }
  },
  // Override default signin page
  pages: {
    signIn: '/signin'
  }

});
