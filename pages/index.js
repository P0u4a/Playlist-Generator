import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import LandingPage from '../components/LandingPage';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';

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
          <Spinner animation="grow" variant="dark" size='sm' />
        </h1>

        <Link href='playlistRequest'>
          <a className={styles.description}>
            jumpstart your youtube playlist creation 👉
          </a>
        </Link>

        <LandingPage />
        <Image src='/songbird.svg' alt='music bird' width={200} height={200} />

      </main>

      <footer className={styles.footer}>
        © 2022 🗿 | Thanks for visiting!
      </footer>
    </div>
  );
}
