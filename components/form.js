import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
//import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useState } from 'react';

export default function PlaylistForm() {
  const [value, setValue] = useState(25);
  const renderTooltip = (props) => (
    <Tooltip id='slider-tooltip' {...props}>
      {value}
    </Tooltip>
  );

  return (
    <Form>
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
          <OverlayTrigger delay={{hide: 800}} placement='right' overlay={renderTooltip}>
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
  );
}