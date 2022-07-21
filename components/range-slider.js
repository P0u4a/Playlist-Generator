// import Tooltip from 'react-bootstrap/Tooltip';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function Slider() {
  // Keep track of Range slider value
  const [value, setValue] = useState(25);
  // // Render tooltip on Range slider
  // const renderTooltip = (props) => (
  //   <Tooltip id='slider-tooltip' {...props}>
  //     {value}
  //   </Tooltip>
  // );

  return (
    <>
      <Form.Range
        value={value} onChange={change => setValue(change.target.value)}
        min={1} max={50}
      />
      <Col xs={3}>
        <Form.Control disabled value={value} />
      </Col>
    </>
  );
}


{/* <OverlayTrigger delay={{ hide: 800 }} placement='bottom' overlay={renderTooltip}>
<Form.Range
  value={value} onChange={change => setValue(change.target.value)}
  min={1} max={50}
/>
</OverlayTrigger> */}