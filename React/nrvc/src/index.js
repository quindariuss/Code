import react from 'react'
import reactdom from 'react-dom'
import 
{
	ChakraProvider,
	Center,
	Badge,
	Text,
	Box,
	Heading
} from '@chakra-ui/react'

reactdom.render
(
	<ChakraProvider>
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
				<Text>
				North Roswell Veterinary Clinic is a full service, AAHA accredited veterinary hospital that specializes in the care of cats and dogs.
				</Text>
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
	</ChakraProvider>,
	document.getElementById('root')
)

