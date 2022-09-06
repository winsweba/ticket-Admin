
import { Box, Button, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchingNav from './components/SearchingNav';
import { db } from './config/FirebaseConfig';
import MainPage from './MainPage';
import AllTicket from './page/AllTicket';
import EditPage from './page/EditPage';
import Registration from './page/Registration/Registration';
import { useAuth } from "../src/context/AuthContext";


function App() {
  const { currentUser } = useAuth();
  const [ticketData, setTicketData] = useState([]);

  const getAllBookings = () => {
    const q = query(collection(db, "tickets"), orderBy("timeStamp", "desc"));

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        // console.log(list)
        setTicketData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log(unsub);
    return () => {
      unsub();
    };
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={"/login"} />;
  };

  return (

   <>
    
<Routes>
<Route path="/" element={
  <RequireAuth>

<MainPage/>
  </RequireAuth>
} />
{/* <Route path={"/:autoID"} element={<MainPage/>} /> */}
  <Route path="/ticket/:autoID" element={
    <RequireAuth>

      <EditPage TicketData={ticketData}/>
    </RequireAuth>
  
  }/>
  <Route path="/login" element={
      <Registration/>
  }/>
</Routes>

  {/* <Registration/> */}

   </>
  );
}

export default App;
