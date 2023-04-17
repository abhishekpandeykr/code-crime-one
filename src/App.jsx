import { useState } from 'react';
import './App.css';
import CrimeOne from './components/CrimeOne';
import ActionMenu from './components/hack';
import { ThemeProvider, Box, Button } from '@primer/react';

function App() {
  return (
    <div className='App'>
      {/* <CrimeOne /> */}
      <ThemeProvider dayScheme='light' nightScheme='dark_dimmed'>
        <ActionMenu>
          <ActionMenu.Button>Assignee</ActionMenu.Button>
          <ActionMenu.Overlay>
            <Box
              display='flex'
              flexDirection='column'
              maxWidth='300px'
              padding={2}
            >
              <p>Assignee</p>
              <Button mb={1}>Test1</Button>
              <Button mb={1}>test 2</Button>
              <Button>Tested</Button>
            </Box>
          </ActionMenu.Overlay>
        </ActionMenu>
      </ThemeProvider>
    </div>
  );
}

export default App;
