import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Playlistform from './playlistRequest';
import LandingPage from '../components/landing-page';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Music Playlist Generator</title>
        <meta name='Title' content='Youtube playlist generator' />
        <meta name='google-site-verification' content='ErCqfgiHBx18jxnURplirBqL24OUNgkV4Cu12pQCewQ' />
        <link rel='icon' href='/vinyl.svg' />
      </Head>
      <main className={styles.main} id='home'>
        <h1 className={styles.title}>
          Music Playlist Generator
        </h1>

        <p className={styles.description}>
          jumpstart your youtube playlist creation!
        </p>

        <LandingPage />

        <div id='form'>
          <Playlistform />
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='vercel logo' width={72} height={20} />
          </span>
        </a>
      </footer>
    </div>
  );
}
