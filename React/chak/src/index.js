import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Text, Flex} from "@chakra-ui/react"



ReactDOM.render(
 <ChakraProvider>
  
     <Flex align="center" justify="center">
     Flex Container
     </Flex>
</ChakraProvider>,
  document.getElementById('root')
);

