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
          scope: 'openid https://www.googleapis.com/auth/youtube.force-ssl'
        }
      }
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  // callbacks: {
  //   async jwt({ token, user, account }) {

  //     if (account && user) {
  //       token.access_token = account.access_token;
  //     }
  //     return token;
  //   },
  //   async session({ session, token, user }) {
  //     session.access_token = token.access_token;
  //     return session;
  //   }
  // }

});
