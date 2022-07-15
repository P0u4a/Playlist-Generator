import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginBtn from '../components/login-btn';
import Navigate from '../components/Navigation';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navigate/>
      <LoginBtn/>
      <Component {...pageProps} />
    </SessionProvider>

  );
}

export default MyApp;
