import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigate from '../components/Navigate';
import { SessionProvider } from "next-auth/react";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navigate />
      <Component {...pageProps} />
    </SessionProvider>

  );
}
