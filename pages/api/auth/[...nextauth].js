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
          access_type: 'offline',
          response_type: 'code'
        }
      },
      // Admin access to youtube account
      scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
    }),
  ],
  // Callback
  //secret: process.env.NEXTAUTH_SECRET,
});