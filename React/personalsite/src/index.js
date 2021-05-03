import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Button, ButtonGroup, Divider, Text,UnorderedList, ListItem, ColorModeScript, toggleColorMode, colorMode } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import theme from "./theme"




function Tabby()
{
 
  return(
    <Tabs  isFitted variant="enclosed">
     <TabList mb="1em">
       <Tab>About</Tab>
       <Tab>Projects</Tab>
       <Tab>Contact</Tab>
     </TabList>
     
     <TabPanels>
       <TabPanel>
         <Text>Hello Internet Browser, I like to make software, interwork systems, and build cool things. When I am not making software I am most likely doing these things in no particulary order: </Text>
          <UnorderedList>
          <ListItem>Reading</ListItem>
          <ListItem>Writing</ListItem>
          <ListItem>Investing</ListItem>
          <ListItem>3D Printing</ListItem>
          <ListItem>Cooking</ListItem>
          <ListItem>Math</ListItem>
        </UnorderedList>
       </TabPanel>
       <TabPanel>
         <Heading>Software Engineer: MindSense</Heading>
          <Divider/>
          <Heading>Software Engineer: Lavendale</Heading>
           <Divider/>
           <Heading>President: Kennesaw Association for Computing and Machinery</Heading>
            <Divider/>
           <Heading>Vice President: Kennesaw Speech and Debate</Heading>
            <Divider/>
           <Heading>Founder: Political Platform</Heading>
            <Divider/>
       
       </TabPanel>
       <TabPanel>
        <Text>Phone Number: 704-470-7036</Text>
        <Text>Github: quinwoods</Text>
        <Text>Email: quinwoodz@gmail.com</Text>
      </TabPanel>
     </TabPanels>
   </Tabs>
  )
}
ReactDOM.render(
 <ChakraProvider>
 <ColorModeScript initialColorMode={theme.config.initialColorMode} />
 <Button onClick={toggleColorMode}>
 Toggle {colorMode === "light" ? "Dark" : "Light"}
</Button>
   <Heading size="3xl">Quin'darius Lyles-Woods</Heading>
   <Heading color="gray" size="3xl">Software Engineer</Heading>
   <Heading color="gray.400" size="2xl">Based in Alpharetta, Ga</Heading>
   <Tabby/>
     
   
  
 </ChakraProvider>,
 
   
  document.getElementById('root')
);


