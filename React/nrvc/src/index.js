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
	List,
	ListItem,
	UnorderedList,
	IconButton,
	ColorModeScript,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	SimpleGrid,
	TableCaption,
	AspectRatio,
	Thead,
	Tbody,
	Td,
	Th,
	Tr,
	Badge,
	Text,
	useColorMode,
	Button,
	ButtonGroup,
	Box,
	Heading
} from '@chakra-ui/react'

import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

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
		<Box borderWidth='1px'boxShadow='base' margin='2%' borderRadius='md' w={['90%', '75%', '50%']} bottom="0">
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
function ServiceName(props)
{
	return(
		<AccordionItem>
		<h2>
		  <AccordionButton>
			<Box flex="1" textAlign="left">
			  {props.title}
			</Box>
			<AccordionIcon />
		  </AccordionButton>
		</h2>
		<AccordionPanel pb={4}>
		 <UnorderedList>
			   
		 </UnorderedList>
		</AccordionPanel>
	  </AccordionItem>
	)
}

function ServiceTitle(props)
{
	return(
		<h2>
		<AccordionButton>
		  <Box flex="1" textAlign="left">
			{props.title}
		  </Box>
		  <AccordionIcon />
		</AccordionButton>
	  </h2>
	)
}

function Services()
{
	return(
		<div>
		<Center>
		<Heading>
		Services
		</Heading>
		</Center>
		<Center>
		<Box  borderWidth='2px' borderRadius='md' boxShadow='md' w={['90%', '90%', '75%']}>
			<Accordion allowToggle>
				<AccordionItem>
				  <ServiceTitle title='Preventive Care'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem>Physical Exams</ListItem>
						<ListItem>Yearly vaccines</ListItem>
						<ListItem>Geriatric care</ListItem>
						<ListItem>Routine blood work and drug monitoring blood work</ListItem>
						<ListItem>Health certificates</ListItem>
						<ListItem>Vaccines and boosters</ListItem>
					 </UnorderedList>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem>
				  <ServiceTitle title='Routine Surgery'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem>Spay</ListItem>
						<ListItem>Neuter</ListItem>
						<ListItem>Declaw</ListItem>
						<ListItem>Dental Cleaning and Extractions</ListItem>
					 </UnorderedList>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem>
				  <ServiceTitle title='Specialized Surgery'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem>Cruciate Repairs</ListItem>
						<ListItem>FHO</ListItem>
						<ListItem> Bone Repairs </ListItem>
						<ListItem>Ear surgery (Hematoma repairs / ZEP procedure / Total ear canal ablation)</ListItem>
						<ListItem> Growth removals (malignant and benign) </ListItem>
						<ListItem> Eye surgery (Entropion / Ectropion / Enucleation / Cherry Eye) </ListItem>
						<ListItem> Exploratory </ListItem>
					 </UnorderedList>
					</AccordionPanel>
				  </AccordionItem>
				  
				<AccordionItem>
				  <ServiceTitle title='Chronic and Acute Medical Problems'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem> Arthritis and other orthopedic problems </ListItem> 
						<ListItem> Allergies and other skin diseases </ListItem>
						<ListItem> Ear disease </ListItem>
						<ListItem> Eye disease </ListItem>
						<ListItem> GI disease </ListItem>
						<ListItem> Heart and Lung disease </ListItem>
						<ListItem> Endocrine/Hormonal disease </ListItem>
						<ListItem> Neurological disease </ListItem>
						<ListItem> Metabolic disease </ListItem>
						<ListItem> Trauma </ListItem>
					 </UnorderedList>
					</AccordionPanel>
				  </AccordionItem>
				  
				<AccordionItem>
				  <ServiceTitle title='In-House and Outside Lab Testing'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem> Heartworm exams </ListItem>
						<ListItem> Intestinal Parastie exams </ListItem>
						<ListItem> Feline Leukemia and FIV testing </ListItem>
						<ListItem> Urinalysis </ListItem>
						<ListItem> Cytology </ListItem>
						<ListItem> Histopath </ListItem>
						<ListItem> Bloodwork (routine, drug monitoring, and specialized for above mentioned diseases) </ListItem>
					 </UnorderedList>
					</AccordionPanel>
				  </AccordionItem>
				  
				<AccordionItem>
				  <ServiceTitle title='Oncology'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem> Diagnosis </ListItem>
						<ListItem> Surgical Excision </ListItem>
						<ListItem> Chemotherpy </ListItem>
						<ListItem> Hospice </ListItem>
					 </UnorderedList>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem>
				  <ServiceTitle title='Radiology'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						 <ListItem> X-Ray </ListItem>
						 <ListItem> OFA </ListItem>
						 <ListItem> Barium study </ListItem>
						 <ListItem> Cystogram </ListItem>
						 <ListItem> Ultrasound </ListItem>
					 </UnorderedList>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem>
				  <ServiceTitle title='Heartworm and Flea'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						 <ListItem> Prevention and education </ListItem>
						 <ListItem> Heartworm treatment </ListItem>i
					 </UnorderedList>
					</AccordionPanel>
				</AccordionItem>
				
				<AccordionItem>
				  <ServiceTitle title='Animal Husbandry'/>
				  <AccordionPanel pb={4}>
					 <UnorderedList>
						<ListItem> Boarding </ListItem>
						<ListItem> Anal gland expression </ListItem>
						<ListItem> Nail Trims </ListItem>
						<ListItem> Bathing </ListItem>
					 </UnorderedList>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</Box>
	</Center>
	</div>
	)
}
	
reactdom.render
(
	
	<ChakraProvider>
	<ColorModeScript initialColorMode={theme.config.initialColorMode} />
	<Center>
	<Heading size='4xl'>	
		North Roswell
	</Heading>
</Center>
<Center>
	<Heading size='3xl'>
		Veterinary Clinic
	</Heading>
</Center>
	<Title/>
	<Center>
	<Lightswitch/>
	</Center>
	<Staff/>
	<Services/>
	<Center>
		<Heading>
			Contact Information
		</Heading>
	</Center>
	
	
	
	<Hours/>
	</ChakraProvider>,
	document.getElementById('root')
)


// <Center>
// <Box w={['90%', '75%', '50%']}>
//   <iframe
// 	title="map"
// 	src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d105704.0537658489!2d-84.38824092351524!3d34.11430597197142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d34.1676506!2d-84.3436871!4m5!1s0x88f574f12711f227%3A0x43484662551bb919!2snorth%20roswell%20veterinary%20clinic!3m2!1d34.0602126!2d-84.3255851!5e0!3m2!1sen!2sus!4v1620402657607!5m2!1sen!2sus"
// 	objectFit='cover'/>
// </Box>
// </Center>
	
