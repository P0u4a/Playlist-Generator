import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Slider() {
  // Keep track of Range slider value
  const [value, setValue] = useState(25);
  // Render tooltip on Range slider
  const renderTooltip = (props) => (
    <Tooltip id='slider-tooltip' {...props}>
      {value}
    </Tooltip>
  );

  return (
    <OverlayTrigger delay={{ hide: 800 }} placement='bottom' overlay={renderTooltip}>
      <Form.Range
        value={value} onChange={change => setValue(change.target.value)}
        min={1} max={50}
      />
    </OverlayTrigger>
  );
}