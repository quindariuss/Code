import {useState} from 'react'
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



function Search  () {
	const [value, setValue] = useState("");
	function handleClick() {
		setValue("")
	}
	return(
		<Center>
		<form action="/" method="get">
			<Input
			value={value}
			onChange={e => setValue(e.target.value)}
			placeholder="search"
			name="s"
			/>
			<Center p='10'>
				<Button onClick={handleClick}type="reset">Reset Search</Button>
			</Center>
		</form>
		<Heading>
			{value}
		</Heading>
	</Center>
	)
}


reactdom.render
(
	<ChakraProvider>
	<div>
		<Heading>
			<Center p='10'>
				Hello Word Explorer
			</Center>
		</Heading>
		<Search/>
		<Center>
		<Box width="lg" height="lg" bg="turquoise" borderRadius='10' border='2'>
			Center
		</Box>
	</Center>
	</div>
	</ChakraProvider>,
	document.getElementById('root')
)