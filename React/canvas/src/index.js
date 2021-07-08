import react from "react";
import reactdom from "react-dom";
import { ChakraProvider, Heading, Text, Link, Center } from "@chakra-ui/react";
import { App } from "./app.js";

reactdom.render(
  <ChakraProvider>
    <Center pt="20">
      <App />
    </Center>
  </ChakraProvider>,
  document.getElementById("root")
);
