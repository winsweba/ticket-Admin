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
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import { useAuth } from "../context/AuthContext";
import {
  collection,
  doc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/FirebaseConfig";

const SearchById = () => {
  const [ticketData, setTicketData] = useState([]);
  const [search, setSearch] = useState("");
  // const { createUser, login, currentUser } = useAuth();

  const getAllBookings = () => {
    const q = query(
      collection(db, "tickets"),
      // where("userID", "==", currentUser.uid),
      where("autoID", "==", search),
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "tickets", id));
      setTicketData(ticketData.filter((item) => item.id != id));
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
        <Td>{data.payment}</Td>
        <Td><Button onClick={() => handleDelete(data.id)} colorScheme="red">
              Delete
            </Button></Td>
      </Tr>
    );
  });

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  return (
    <>
      <Flex>
        <Center w="200px">
          <Input placeholder="custom placeholder" onChange={handelChange} />
        </Center>

        <Center w="200px">
          <Button onClick={getAllBookings}> Search </Button>
        </Center>
      </Flex>

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
              <Th>Amount Payed</Th>
            </Tr>
          </Thead>
          <Tbody>{allTicket}</Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default SearchById;
