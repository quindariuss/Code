import react from 'react'
import App from './App'
import { useState } from 'react';
import reactdom from 'react-dom'
import posts from './words-small.json'
import
{
	ChakraProvider,
	Heading,
	Text,
	Link,
} from '@chakra-ui/react'


reactdom.render
(
	<ChakraProvider>
	<App/>
	</ChakraProvider>,
	document.getElementById('root')
)