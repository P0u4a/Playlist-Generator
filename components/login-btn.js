import { useSession, signIn, signOut } from 'next-auth/react';
import Button from 'react-bootstrap/Button';

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant='light'
                              // Prevent page reload
        onClick={() => signOut({ redirect: false })}>
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      <Button variant='primary'
                    // Start Oauth flow
      onClick={() => signIn('google')}>
        Sign in
      </Button>
    </>
  );
}
