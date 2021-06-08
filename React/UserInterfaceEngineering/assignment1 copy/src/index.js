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
	HStack,
	Button,
} from '@chakra-ui/react'

import words from './data/words'



function Search  () {
	const [value, setValue] = useState("");

	function handleClick() {
		setValue("")
	}



	return(

		<form action="/" method="get">
		<HStack m='5' spacing='5'>
		<Input
		autocomplete="off"
		value={value}
		onChange={e => setValue(e.target.value)}
		placeholder="search"
		name="s"
		/>
		<Button onClick={handleClick}type="reset">
		Reset</Button>
		</HStack>

			<Center p='10'>


<Text>{words.filter(word => word.includes(value)).length} Words Matching: '{value}'</Text>
			</Center>
			<Center>

			<Box borderWidth='1px' boxSize="lg"  borderRadius='10' border='2' overflow="scroll">

				{words.filter( word => word.includes(value)).map((word) => (
					<Center>
						<Text>
							{word}
						</Text>
				</Center>
				))}
			</Box>
		</Center>
		</form>

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

	</div>
	</ChakraProvider>,
	document.getElementById('root')
)