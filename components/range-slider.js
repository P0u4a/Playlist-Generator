import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Slider() {
  // Keep track of Range slider value
  const [value, setValue] = useState(12);
  // Check size of playlist based on slider value
  let playlistSize;
  if (value >= 1 && value <= 16) {
    playlistSize = 'small 😀';
  }
  else if (value >= 17 && value <= 32) {
    playlistSize = 'medium 😓';
  }
  else {
    playlistSize = 'large 😰';
  }
  // Render tooltip on Range slider
  const renderTooltip = (props) => (
    <Tooltip id='slider-tooltip' {...props}>
      {playlistSize}
    </Tooltip>
  );

  return (
    <>
      <OverlayTrigger delay={{ hide: 800 }} placement='right' overlay={renderTooltip}>
        <Form.Range
          value={value} onChange={change => setValue(change.target.value)}
          min={1} max={50}
        />
      </OverlayTrigger>
    </>
  );
}