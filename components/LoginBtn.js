import { useSession, signIn, signOut } from 'next-auth/react';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Signin.module.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function LoginBtn() {
  // Track the visibility of modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Check if user is signed in
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Button variant='light' size='lg'
          // Prevent page reload
          onClick={() => signOut({ redirect: false })}>
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      <Button variant='primary' size='lg' onClick={handleShow}>Sign in</Button>
      <Modal
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <br />
          <h1 className={styles.buttonText}>
            Sign in with Google
          </h1>
          <span
            className={styles.customBtn}
            // Sign in with Google and redirect to Create page upon signin
            onClick={() => signIn('google', { callbackUrl: '/playlistRequest' })} />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Return
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
