import { AnchoredOverlay } from '@primer/react';
import { useState } from 'react';

export default function MenuOverlay(props) {
  const [open, setOpen] = useState(false);

  return (
    <AnchoredOverlay
      open={open}
      onOpen={() => setOpen(true)}
      onClose={(_) => setOpen(false)}
      renderAnchor={props.renderAnchor}
      {...props}
    >
      {props.children}
    </AnchoredOverlay>
  );
}
