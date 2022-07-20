import styles from '../styles/Home.module.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Slider from '../components/range-slider';

//TODO: Turn range slider into a seperate component
export default function Playlistform() {

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
        <Form.Group as={Row} className='mb-3' controlId='topic'>
          <Form.Label column sm={2}>
            Topic
          </Form.Label>
          <Col sm={10}>
            <Form.Control required type='text' placeholder='Taylor Swift' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3' controlId='size'>
          <Form.Label column sm={2}>
            Size
          </Form.Label>
          <Col sm={10}>
            <Slider/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className='mb-3'>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant='outline-primary' type='submit'>Create</Button>
          </Col>
        </Form.Group>
      </Form>
    </>
  );
}