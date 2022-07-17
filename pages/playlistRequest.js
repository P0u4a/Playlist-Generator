import styles from '../styles/Home.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';

export default function Playlistform() {
  // Keep track of Range slider value
  const [value, setValue] = useState(25);
  // Render tooltip on Range slider
  const renderTooltip = (props) => (
    <Tooltip id='slider-tooltip' {...props}>
      {value}
    </Tooltip>
  );
  // Handle the submit event on form submit
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page
    event.preventDefault();

    // Get data from the form.
    const data = {
      topic: event.target.topic.value,
      size: event.target.size.value,
    }

    const JSONdata = JSON.stringify(data);

    // Send the form data to our API and get a response
    const response = await fetch('/api/playlistMaker', {
      // Oauth credentials included while fetching
      credentials: 'include',
      // Body of the request is the JSON data created above
      body: JSONdata,

      //Sending JSON data to server
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    // Get the response data from server as JSON
    const result = await response.json();
    alert(`${result.data}`);
  }

  return (
    <>
      <h1 className={styles.title}>
        Playlist Creator
      </h1>
      <br />
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} className='mb-3' controlId='topic'>
          <Form.Label column sm={2}>
            Topic
          </Form.Label>
          <Col sm={3}>
            <Form.Control required type='text' placeholder='Taylor Swift' />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className='mb-3' controlId='size'>
          <Form.Label column sm={2}>
            Size
          </Form.Label>
          <Col sm={3}>
            <OverlayTrigger delay={{ hide: 800 }} placement='right' overlay={renderTooltip}>
              <Form.Range
                value={value} onChange={change => setValue(change.target.value)}
                min={1} max={50}
              />
            </OverlayTrigger>
          </Col>
        </Form.Group>

        <Form.Group as={Col} className='mb-3'>
          <Col sm={{ span: 10, offset: 3 }}>
            <Button variant='outline-primary' type='submit'>Create</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}