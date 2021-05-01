import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Text, Flex, Button} from "@chakra-ui/react"



ReactDOM.render(
 <ChakraProvider>
  
<Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
</ChakraProvider>,
  document.getElementById('root')
);

