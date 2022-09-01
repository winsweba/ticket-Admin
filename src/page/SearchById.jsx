import React from 'react'
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
  Input
} from '@chakra-ui/react'
const SearchById = () => {
  return (
    <>
    <Input></Input>

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
    {/* {allTicket} */}
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

export default SearchById