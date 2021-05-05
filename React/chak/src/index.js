
import React from 'react';
import ReactDOM from 'react-dom';
import { createBreakpoints} from "@chakra-ui/theme-tools";
import { ChakraProvider ,Box} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  ChevronDownIcon,
  Button,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

// Request (GET http://localhost:3000/todos)
fetch("http://localhost:3000/todos", {
      "method": "GET",
      "headers": {}
})
.then((res) => res.text())
.then(console.log.bind(console))
.catch(console.error.bind(console));





ReactDOM.render(
   <ChakraProvider>
<Menu isLazy>
<MenuButton>Open menu</MenuButton>
<MenuList>
  {/* MenuItems are not rendered unless Menu is open */}
  <MenuItem>New Window</MenuItem>
  <MenuItem>Open Closed Tab</MenuItem>
  <MenuItem>Open File</MenuItem>
</MenuList>
</Menu>
  </ChakraProvider>,
    document.getElementById('root')
  );