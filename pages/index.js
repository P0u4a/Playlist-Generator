import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import LoginBtn from '../components/login-btn';

export default function Home() {
  return (
    <div className={styles.container}>
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
          <Link href = '/playlistRequest'>
            <a>Get Started</a>
          </Link>
        </h1>

        <LoginBtn/>

      </main>
    </div>    

  );
}