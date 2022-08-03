import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Slider from '../components/range-slider';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';
import { getSession } from 'next-auth/react';

export default function Playlistform() {
  // Keep track of the submit button's state
  const [click, setClick] = useState(false);

  // Handle the submit event on form submit
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page
    event.preventDefault();

    // Check user is signed in to use the api
    const session = await getSession();
    // Prevent api call if user is not signed in
    if (!session) {
      return alert('You must be signed in to use this service 🤖');
    }

    // Start spinner
    setClick(true);
    // Get data from the form.
    const data = {
      topic: event.target.topic.value,
      size: event.target.size.value,
    }

    const JSONdata = JSON.stringify(data);

    // Send form data to API and get a response
    const response = await fetch('/api/playlistMaker', {

      body: JSONdata,

      //Send JSON data to server
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    
    // Get the response data from server as JSON
    try {
      const result = await response.json();
      alert(`${result.data}`);
    } catch(err) {
      alert('Your playlist has been successfully created 🎉\nCheck your YouTube account!')
    }

    // Stop spinner
    setClick(false);
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className='mb-3' controlId='topic'>
            <Form.Label style={{ color: '#f0f8ff' }}>
              Topic
            </Form.Label>
            <Col sm={12}>
              <Form.Control required type='text' placeholder='Lofi hip hop' />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3' controlId='size'>
            <Form.Label style={{ color: '#f0f8ff' }}>
              Size
            </Form.Label>
            <Col sm={12}>
              <Slider />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3'>
            <Col>
              <Button variant='primary' type='submit'>
                {!click && 'Create'}
                {click && <Spinner animation='border' variant='light' />}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}