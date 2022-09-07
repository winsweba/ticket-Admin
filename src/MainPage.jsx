
import { Box, Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import './App.css';
import SearchingNav from './components/SearchingNav';
import AllTicket from './page/AllTicket';
import DeletedPage from './page/DeletedPage';
import Registration from './page/Registration/Registration';
import { useAuth } from "../src/context/AuthContext";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const MainPage = () => {
  const { logout } = useAuth();
  const { colorMode, toggleColorMode } = useColorMode();


  const handelLogOut = async ()=> {
    
    try {
      await logout()
      // navigate("/")
    } catch {
      // setError("Failed to log out")
    }
  }
    return (
        <>
         <Box m={5} p={5} shadow='md' borderWidth='1px'>
           <Text fontSize='xl' p={20} as='b'>Admin Side Use Only</Text>
            <Button onClick={handelLogOut} colorScheme='green'> Log out</Button>

            <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top="0"
      right="0"
      m="1rem"
    >
      {colorMode === "dark" ? (
        <SunIcon color="orange.200" />
      ) : (
        <MoonIcon color="blue.700" />
      )}
    </Button>
         </Box>
     
         <Tabs isFitted variant='enclosed'>
         <TabList mb='1em'>
           <Tab><Text fontSize='2xl'>All Tickets</Text></Tab>
          <Tab><Text fontSize='2xl' >Search Filtering</Text></Tab> 
          <Tab><Text fontSize='2xl' color='tomato' >Deleted</Text></Tab> 
         </TabList>
         <TabPanels>
           <TabPanel>
           <AllTicket/>
           </TabPanel>
           <TabPanel>
           <SearchingNav/>
           </TabPanel>


           <TabPanel>
           <DeletedPage/>
           </TabPanel>
         </TabPanels>
       </Tabs>
     
       {/* <Registration/> */}
     
        </>
       );
}

export default MainPage