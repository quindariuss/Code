import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box} from "@chakra-ui/react"



ReactDOM.render(
 <ChakraProvider>
<h1>
  Hello World
</h1>
<Box m = {2}>Tomato</Box>
</ChakraProvider>,
  document.getElementById('root')
);

