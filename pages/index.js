import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Playlistform from '../components/playlistRequest';

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Wizard</title>
        <meta name='Title' content='Youtube playlist generator' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Youtube Music Playlist Wizard
        </h1>

        <p className={styles.description}>
          music playlists on youtube made easy!
        </p>

        <h1 className={styles.title}>
          <Link href = '#form'>
            <a>Get Started</a>
          </Link>
        </h1>
      </main>

      <div id='form'>
        <Playlistform/>
      </div>

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