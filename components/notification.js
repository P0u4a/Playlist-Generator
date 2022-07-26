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
          This app is not verified by google <b>yet</b>. However, you can be
          assured that your YouTube account is not tampered with, and the premissions
          you grant to this service are only used to create your desired music playlist.
          You can revoke access whenever you wish by going to the security section of your
          Google account.<br /><br />
          
          Visit the Github Page to inspect the codebase and view instructions on how to run the app locally.
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