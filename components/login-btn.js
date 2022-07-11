import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Signin.module.css'

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button 
        className={styles.signoutBtn}
        onClick={() => signOut()}>Sign out
        </button>
      </>
    );
  }

  return (
    <>
      <button
      className={styles.signinBtn}
      onClick={() => signIn('google')}>
      </button>
    </>
  );
}
