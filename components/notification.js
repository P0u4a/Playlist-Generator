import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Notification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='secondary' onClick={handleShow}>Privacy Policy</Button>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app uses Oauth2.0 to make authorised API calls to the YouTube Data API V3.
          The scope of access enables the app to see, edit, and permanently delete your
          YouTube videos, ratings, comments and captions. However, the app only uses this scope to
          create a playlist on your account, search for videos on YouTube related to your input, and
          add such videos to your playlist. User data is stored in encrypted JSON Web Tokens and the app&apos;s access to your
          YouTube account expires after some time. You can also revoke access at any time you wish through your Google account.
          <br />
          Music Playlist Generator&apos;s use and transfer to any other
          app of infomration received from Google APIs will adhere
          to the <i>Google API Services User Data Policy</i>.


        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}