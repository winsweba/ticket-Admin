import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  Select,
  Flex,
  Center,
  Square,
  Text,
  Box,
  Button,
  Skeleton,
  Stack,
  Icon,
} from "@chakra-ui/react";
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/FirebaseConfig";
import {
  accra,
  bolgatanga,
  capeCoast,
  dambai,
  damongo,
  goaso,
  hoT,
  koforidua,
  kumasi,
  nalerigu,
  sunyani,
  takoradi,
  tamale,
  techiman,
  waT,
  wiawso,
} from "../config/regionData";
import { ArrowForwardIcon, CalendarIcon, DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";




const PlaceAndDate = () => {
  const [ticketData, setTicketData] = useState([]);
  const [ticketSearchData, setTicketSearchFormData] = useState({
    destination: "",
    departure: "",
    date: "",
  });

  const getAllBookings = () => {
    const q = query(
      collection(db, "tickets"),
      where("ticketFormData.departure", "==", ticketSearchData.departure),
      where("ticketFormData.destination", "==", ticketSearchData.destination),
      where("ticketFormData.date", "==", ticketSearchData.date),
      where("isSave", "==", "save"),
      orderBy("timeStamp", "desc")
    );

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        console.log(list);
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

  // useEffect(() => {
  //   getAllBookings()
  // }, [])
  const handleDelete = async (id) => {
    try {
      // await deleteDoc(doc(db, "tickets", id));
      // setTicketData(ticketData.filter((item) => item.id != id));
      const updateTicket = doc(db, "tickets",id);
    
              const docRef = await updateDoc(updateTicket, {
                isSave: "delete",
                // timeStamp: serverTimestamp(),
              });
    } catch (error) {
      console.log(error);
    }
  };

  const allTicket = ticketData.map((data) => {
    return (
      <Tr key={data.id}>
        <Td>{data.ticketFormData.firstName}</Td>
        <Td>{data.ticketFormData.lastName}</Td>
        <Td>{data.autoID}</Td>
        <Td>{data.ticketFormData.phoneNumber}</Td>
        <Td>
          {new Date(data.timeStamp.seconds * 1000).toLocaleDateString("en-US")}
        </Td>
        <Td>{data.ticketFormData.ticketAmount}</Td>
        <Td>{data.ticketFormData.departure}</Td>
        <Td>{data.ticketFormData.destination}</Td>
        <Td>{data.ticketFormData.timing}</Td>
        <Td>{data.ticketFormData.date}</Td>
        <Td>{data.ticketFormData.luggage}</Td>
        <Td>{data.payment}</Td>
        <Td>
            <Button colorScheme='green'>
            <Link to={`/ticket/${data.autoID}`}>Edit</Link>
            </Button>
            
          </Td>
          <Td>
          {/* <Button colorScheme="red">
            <Link to={`/ticket/${data.autoID}`}>Edit</Link>
            </Button> */}
          <Button onClick={() => handleDelete(data.id)} colorScheme="red">
          <Icon as={DeleteIcon} />
            </Button>
          </Td>
      </Tr>
    );
  });

  const handleTacketFormChange = (event) => {
    const { name, value, type, checked } = event.target;

    setTicketSearchFormData((prevFromData) => {
      return {
        ...prevFromData,
        // [event.target.name] : event.target.value
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <>

    
      <Flex>
        <Center w="200px">
          <Select
            name="departure"
            id="departure"
            value={ticketSearchData.departure}
            onChange={handleTacketFormChange}
          >
            <option value="">Place of departure</option>
            <option value={kumasi}>Kumasi</option>
            <option value={sunyani}>Sunyani</option>
            <option value={techiman}>Techiman</option>
            <option value={goaso}>Goaso</option>
            <option value={capeCoast}>Cape Coast</option>
            <option value={koforidua}>Koforidua</option>
            <option value={accra}>Accra</option>
            <option value={tamale}>Tamale</option>
            <option value={damongo}>Damongo</option>
            <option value={nalerigu}>Nalerigu</option>
            <option value={bolgatanga}>Bolgatanga</option>
            <option value={waT}>Wa</option>
            <option value={hoT}>Ho</option>
            <option value={dambai}>Dambai</option>
            <option value={takoradi}>Takoradi</option>
            <option value={wiawso}>Wiawso</option>
          </Select>
        </Center>
        <Center w="200px">
          <Select
            name="destination"
            id="destination"
            value={ticketSearchData.destination}
            onChange={handleTacketFormChange}
          >
            <option value="">Place of destination</option>
            <option value={kumasi}>Kumasi</option>
            <option value={sunyani}>Sunyani</option>
            <option value={techiman}>Techiman</option>
            <option value={goaso}>Goaso</option>
            <option value={capeCoast}>Cape Coast</option>
            <option value={koforidua}>Koforidua</option>
            <option value={accra}>Accra</option>
            <option value={tamale}>Tamale</option>
            <option value={damongo}>Damongo</option>
            <option value={nalerigu}>Nalerigu</option>
            <option value={bolgatanga}>Bolgatanga</option>
            <option value={waT}>Wa</option>
            <option value={hoT}>Ho</option>
            <option value={dambai}>Dambai</option>
            <option value={takoradi}>Takoradi</option>
            <option value={wiawso}>Wiawso</option>
          </Select>
        </Center>
        <Center w="200px">
          <Input
            type="date"
            name="date"
            value={ticketSearchData.date}
            onChange={handleTacketFormChange}
            required
            true
          />
        </Center>
        <Center w="200px">
          <Button onClick={getAllBookings}> Search </Button>
        </Center>
      </Flex>


      <Button
        colorScheme="gray"
        size="lg"
        leftIcon={<ArrowForwardIcon />}
        rightIcon={<CalendarIcon />}
      >
        Total Number of Ticket Booking is {ticketData.length}
      </Button>

      {
        ticketData.length === 0 ? <><Text fontSize='3xl' as='b'>Please Make A To Display Ticket Data </Text> 
        <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
    </Stack>
        </> :
        <TableContainer>
        <Table variant="simple" size="sm">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Ticket ID</Th>
              <Th>Phone Number</Th>
              <Th>Ordering Date</Th>
              <Th>Number Of Ticket Need</Th>
              <Th>Departure</Th>
              <Th>Destination</Th>
              <Th>Time Of Departure</Th>
              <Th>Traveling Date</Th>
              <Th>Luggage</Th>
              <Th>Amount Payed</Th>
            </Tr>
          </Thead>
          <Tbody>{ allTicket}</Tbody>
        </Table>
      </TableContainer>}
    </>
  );
};

export default PlaceAndDate;
