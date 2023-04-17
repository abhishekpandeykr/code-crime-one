import { AnchoredOverlay, Box, Button, ThemeProvider } from '@primer/react';
import { useState } from 'react';

const theme = {
  colors: {
    canvas: {
      default: '#fff',
    },
  },
  borderColor: 'red',
};

export default function CrimeOne() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider dayScheme='light' nightScheme='dark_dimmed'>
      <AnchoredOverlay
        renderAnchor={(anchorProps) => {
          console.log({ anchorProps });
          return <Button {...anchorProps}>Assignee</Button>;
        }}
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        theme='red'
      >
        <Box display='flex' flexDirection='column' maxWidth='300px' padding={2}>
          <p>Assignee</p>
          <Button mb={1}>Test1</Button>
          <Button mb={1}>test 2</Button>
          <Button>Tested</Button>
        </Box>{' '}
      </AnchoredOverlay>
    </ThemeProvider>
  );
}
