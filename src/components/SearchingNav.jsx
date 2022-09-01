import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import PlaceAndDate from '../page/PlaceAndDate'
import SearchById from '../page/SearchById'

const SearchingNav = () => {
  return (
    <>
    <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Search By Place and Date</Tab>
    <Tab>Search By ID</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <PlaceAndDate/>
    </TabPanel>
    <TabPanel>
      <SearchById/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </>
  )
}

export default SearchingNav