import styles from '../styles/Home.module.css';
import Link from 'next/link';

// This page will be shown when the user cancels the Oauth flow
export default function ErrorPage() {
  return (
    <>

      <h1 className={styles.generator}>
        Access Denied 😕
      </h1>

      <p className={styles.descriptionAlt}>
        <Link href='/'>
          Return Home
        </Link>
      </p>

    </>
  );
}