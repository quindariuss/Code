import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box, Text, Flex, Button} from "@chakra-ui/react"



ReactDOM.render(
 <ChakraProvider>
  
    <Button
    colorScheme="teal"
    _hover={{
      background: "white",
      color: "teal.500",
    }}
  >
    Hover me
  </Button>
  <Box
    role="group"
  >
    <Box
      _hover={{ fontWeight: 'semibold' }}
      _groupHover={{ color: 'tomato' }}
    >
    </Box>
  </Box>
</ChakraProvider>,
  document.getElementById('root')
);

