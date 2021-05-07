import react from 'react'
import reactdom from 'react-dom'
import 
{
	ChakraProvider,
	Center,
	Table,
	useColorModeValue,
	Stack,
	Image,
	HStack,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	extendTheme,
	ColorModeScript,
	Accordion,
	  AccordionItem,
	  AccordionButton,
	  AccordionPanel,
	  AccordionIcon,
	SimpleGrid,
	TableCaption,
	Thead,
	Tbody,
	Td,
	Th,
	Tr,
	Badge,
	Text,
	useColorMode,
	Button,
	Box,
	Heading
} from '@chakra-ui/react'

const config = {
	  initialColorMode: "light",
	  useSystemColorMode: false,
	}
	
const theme = extendTheme({ config })

	
function Title()
{
	return (
		<div>
			<Center>
				<Heading size='3xl'>	
					North Roswell
				</Heading>
			</Center>
			<Center>
				<Heading size='3xl'>
					Veterinary Clinic
				</Heading>
			</Center>
			<Center>
			<Box borderRadius='md' width='90%' padding='2' textAlign='center'>
			<Center>
				<Text w={[400, 500, 700]}>
					North Roswell Veterinary Clinic is a full service, AAHA accredited veterinary hospital that specializes in the care of cats and dogs.
				</Text>
			</Center>
				<Badge colorScheme='red' margin='2%'>
					AAHA Accredited 
				</Badge>
				<Badge colorScheme='blue' margin='2%'>
					Dog Care
				</Badge>
				<Badge colorScheme='orange' margin='2%'>
					Cat Care
				</Badge>
			</Box>
		</Center>
	</div>
	)
}
function Hours()
{
	return(
		<Center >
		<Box borderWidth='1px'boxShadow='base' margin='5%' borderRadius='md' w={[300, 400, 560]} bottom="0">
			<Table variant='simple' size='sm'>
				<TableCaption textAlign='center'>
					Hours of Operation 
				</TableCaption>
				<Thead>
					<Tr>
						<Th>Day</Th>
						<Th isNumeric>Hours</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
					<Td>Monday</Td>
					<Td isNumeric>7:00am - 6:00pm</Td>
					</Tr>
					<Tr>
					<Td>Tuesday</Td>
					<Td isNumeric>7:00am - 6:00pm</Td>
					</Tr>
					<Tr>
					<Td>Wednesday</Td>
					<Td isNumeric>7:00am - 6:00pm</Td>
					</Tr>
					<Tr>
					<Td>Thursday</Td>
					<Td isNumeric>7:00am - 6:00pm</Td>
					</Tr>
					<Tr>
					<Td>Friday</Td>
					<Td isNumeric>7:00am - 6:00pm</Td>
					</Tr>
					<Tr>
					<Td>Saturady</Td>
					<Td isNumeric>7:00am - 6:00pm</Td>
					</Tr>
					<Tr>
					<Td>Sunday</Td>
					<Td isNumeric>
						<Badge>
							Closed
						</Badge>
					</Td>
					</Tr>
				</Tbody>
			</Table>
		</Box>
	</Center>
	)
}
function Lightswitch()
{
	  const { colorMode, toggleColorMode } = useColorMode()
	  return (
		<header>
		  <Button onClick={toggleColorMode}>
			Toggle {colorMode === "light" ? "Dark" : "Light"}
		  </Button>
		</header>
	  )
	}
function Staff()
{
	return(
		<div>
		<Center>
		<Heading>
			Meet The Crew
		</Heading>
		
	</Center>
	<SimpleGrid minChildWidth="300" height='auto' spacing="40px" margin='5%'>
	  <Box borderRadius='md' bg="tomato" height="200px"></Box>
	  <Box borderRadius='md' bg="tomato" height="200px"></Box>
	  <Box borderRadius='md' bg="tomato" height="200px"></Box>
	</SimpleGrid>
	</div>
	)
}
	
reactdom.render
(
	
	<ChakraProvider>
	<ColorModeScript initialColorMode={theme.config.initialColorMode} />
	<Title/>
	<Center>
	<Lightswitch/>
	</Center>
	<Staff/>
	<Center>
	<Heading>
	Services
	</Heading>
	</Center>
	<Center>

		<Box  borderWidth='2px' borderRadius='md' boxShadow='md' width='90%'>
			<Tabs isFitted variant="enclosed">
			  <TabList mb="1em">
				<Tab>Dog</Tab>
				<Tab>Cat</Tab>
			  </TabList>
			  <TabPanels>
				<TabPanel>
				  <Accordion allowToggle>
					<AccordionItem>
					  <h2>
						<AccordionButton>
						  <Box flex="1" textAlign="left">
							Section 1 title
						  </Box>
						  <AccordionIcon />
						</AccordionButton>
					  </h2>
					  <AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					  </AccordionPanel>
					</AccordionItem>
				  
					<AccordionItem>
					  <h2>
						<AccordionButton>
						  <Box flex="1" textAlign="left">
							Section 2 title
						  </Box>
						  <AccordionIcon />
						</AccordionButton>
					  </h2>
					  <AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					  </AccordionPanel>
					</AccordionItem>
				  </Accordion>
				</TabPanel>
				<TabPanel>
				  <Accordion allowToggle>
					<AccordionItem>
					  <h2>
						<AccordionButton>
						  <Box flex="1" textAlign="left">
							Section 1 title
						  </Box>
						  <AccordionIcon />
						</AccordionButton>
					  </h2>
					  <AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					  </AccordionPanel>
					</AccordionItem>
				  
					<AccordionItem>
					  <h2>
						<AccordionButton>
						  <Box flex="1" textAlign="left">
							Section 2 title
						  </Box>
						  <AccordionIcon />
						</AccordionButton>
					  </h2>
					  <AccordionPanel pb={4}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat.
					  </AccordionPanel>
					</AccordionItem>
				  </Accordion>
				</TabPanel>
			  </TabPanels>
			</Tabs>
		</Box>
	</Center>

	<Hours/>
	</ChakraProvider>,
	document.getElementById('root')
)



	
