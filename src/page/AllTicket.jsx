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
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

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

const AllTicket = () => {
  const [ticketData, setTicketData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <>
        

        <Tr key={data.id}>
          <Td>{data.ticketFormData.firstName}</Td>
          <Td>{data.ticketFormData.lastName}</Td>
          <Td>{data.autoID}</Td>
          <Td>{data.ticketFormData.phoneNumber}</Td>
          <Td>
            {new Date(data.timeStamp.seconds * 1000).toLocaleDateString(
              "en-US"
            )}
          </Td>
          <Td>{data.ticketFormData.ticketAmount}</Td>
          <Td>{data.ticketFormData.departure}</Td>
          <Td>{data.ticketFormData.destination}</Td>
          <Td>{data.ticketFormData.timing}</Td>
          <Td>{data.ticketFormData.date}</Td>
          <Td>{data.payment}</Td>
          <Td>
            <Button onClick={() => handleDelete(data.id)} colorScheme="red">
              Delete
            </Button>
          </Td>
        </Tr>
      </>
    );
  });
  return (
    <>
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
          <Tbody>
            {allTicket}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllTicket;





// <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Modal Title</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody></ModalBody>

//             <ModalFooter>
//               <Button colorScheme="blue" mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button onClick={() => handleDelete(data.id)}>Secondary Action</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>