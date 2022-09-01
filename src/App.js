
import { Box, Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import './App.css';
import SearchingNav from './components/SearchingNav';
import AllTicket from './page/AllTicket';
import Registration from './page/Registration/Registration';

function App() {
  return (
   <>
    <Box p={5} shadow='md' borderWidth='1px'>
      <Text fontSize='xl' as='b'>Admin Side Use Only</Text>

    </Box>

    <Tabs isFitted variant='enclosed'>
    <TabList mb='1em'>
      <Tab><Text fontSize='2xl'>All Tickets</Text></Tab>
     <Tab><Text fontSize='2xl' >Search Filtering</Text></Tab> 
    </TabList>
    <TabPanels>
      <TabPanel>
      <AllTicket/>
      </TabPanel>
      <TabPanel>
      <SearchingNav/>
      </TabPanel>
    </TabPanels>
  </Tabs>

  {/* <Registration/> */}

   </>
  );
}

export default App;
