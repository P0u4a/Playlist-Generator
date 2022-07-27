import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Slider from '../components/range-slider';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container'
import { useState } from 'react';

export default function Playlistform() {
  // Keep track of the submit button's state
  const [click, setClick] = useState(false);

  // Handle the submit event on form submit
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page
    event.preventDefault();
    // Start spinner
    setClick(true);
    // Get data from the form.
    const data = {
      topic: event.target.topic.value,
      size: event.target.size.value,
    }

    const JSONdata = JSON.stringify(data);

    // Send the form data to our API and get a response
    const response = await fetch('/api/playlistMaker', {

      body: JSONdata,

      //Send JSON data to server
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    // Get the response data from server as JSON
    const result = await response.json();
    alert(`${result.data}`);
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
            <Col sm={{ span: 10, offset: 2 }}>
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