import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function Notification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='secondary' onClick={handleShow}>CLICK ME FIRST!</Button>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>IMPORTANT!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This app is not currently verified by google. Hence,
          only test users are able to access the api. If you would
          like to be added as a test user, send an email to botbot40375@gmail.com
          with the gmail associated with your YouTube account included. Alternatively,
          visit the Github page for instructions on how to run the app locally.
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