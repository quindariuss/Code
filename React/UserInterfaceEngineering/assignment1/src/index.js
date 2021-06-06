import react from 'react'
import reactdom from 'react-dom'
import
{
	ChakraProvider,
	Heading,
	Text,
	Input,
	Box,
	Center,
	Link,
	Button,
} from '@chakra-ui/react'

reactdom.render
(
	<ChakraProvider>
	<div>
		<Heading>
			<Center p='10'>
				Hello Word Explorer
			</Center>
		</Heading>
		<Center>
			<form action="/" method="get">
				<Input
				placeholder="search"
				name="s"
				/>
				<Center p='10'>
				<Button type="reset">Reset Search</Button>
			</Center>
			</form>
		</Center>
		<Center>
		<Box width="lg" height="lg" bg="turquoise" borderRadius='10' border='2'>
			Center
		</Box>
	</Center>
	</div>
	</ChakraProvider>,
	document.getElementById('root')
)