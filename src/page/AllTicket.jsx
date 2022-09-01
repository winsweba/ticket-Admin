import React, { useEffect, useState } from 'react'
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
  } from '@chakra-ui/react'

  import { collection, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from '../config/FirebaseConfig';

const AllTicket = () => {
    const [ticketData, setTicketData] = useState([])


    const getAllBookings = () => {
        const q = query(
          collection(db, "tickets"),orderBy("timeStamp" ,"desc")
        );
    
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
        getAllBookings()
      }, [])
    
    const allTicket = ticketData.map(data => {
        return (
                <Tr key={data.id}>
                  <Td>{data.ticketFormData.firstName}</Td>
                  <Td>{data.ticketFormData.lastName}</Td>
                  <Td>{data.autoID}</Td>
                  <Td>{data.ticketFormData.phoneNumber}</Td>
                  <Td>{new Date(data.timeStamp.seconds * 1000).toLocaleDateString("en-US")}</Td>
                  <Td>{data.ticketFormData.ticketAmount}</Td>
                  <Td>{data.ticketFormData.departure}</Td>
                  <Td>{data.ticketFormData.destination}</Td>
                  <Td>{data.ticketFormData.timing}</Td>
                  <Td>{data.ticketFormData.date}</Td>
                  <Td>{data.payment}</Td>
                  {/* <Td>inches</Td> */}
                </Tr>
        )
    })
  return (
    <>

    {/* {allTicket} */}
    <TableContainer>
  <Table variant='simple' size='sm'>
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
      {/* <Tr>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
      </Tr> */}
    </Tbody>
    
  </Table>
</TableContainer>
    </>
  )
}

export default AllTicket