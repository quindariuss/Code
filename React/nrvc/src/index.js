import react from 'react'
import reactdom from 'react-dom'
import dogandman from './dogandman.png'
import { ChakraProvider } from "@chakra-ui/react"
import {
	  Container,
	  Badge,
	  Stack,
	  Flex,
	  Box,
	  Heading,
	  SimpleGrid,
	  Text,
	  Button,
	  HStack,
	  Center,
	  Image,
	  Icon,
	  IconButton,
	  createIcon,
	  IconProps,
	  useColorModeValue,
	} from '@chakra-ui/react';
	
	function CallToActionWithVideo() {
	  return (
		<Container maxW={'7xl'}>
		  <Stack
			align={'center'}
			spacing={{ base: 8, md: 10 }}
			py={{ base: 20, md: 28 }}
			direction={{ base: 'column', md: 'row' }}>
			<Stack flex={1} spacing={{ base: 5, md: 10 }}>
			  <Heading
				lineHeight={1.1}
				fontWeight={600}
				fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
				<Text
				  as={'span'}
				  position={'relative'}
				  _after={{
					content: "''",
					width: 'full',
					height: '30%',
					position: 'absolute',
					bottom: 1,
					left: 0,
					bg: 'gray.100',
					zIndex: -1,
				  }}>
				  North Roswell
				</Text>
				<br />
				<Text as={'span'} color={'green.600'}>
				  Veterinary Clinic
				</Text>
			  </Heading>
			  <Text color={'gray.500'}>
			  	North Roswell Veterinary Clinic is a full service, AAHA accredited veterinary hospital that specializes in the care of cats and dogs.
			  </Text>
			  <Stack
				spacing={{ base: 4, sm: 6 }}
				direction={{ base: 'column', sm: 'row' }}>
				<Button
				  rounded={'full'}
				  size={'lg'}
				  fontWeight={'normal'}
				  px={6}
				  colorScheme={'green'}
				  bg={'green.400'}
				  _hover={{ bg: 'green.500' }}>
				  Contact Us
				</Button>
				<Button
				  rounded={'full'}
				  size={'lg'}
				  fontWeight={'normal'}
				  px={6}
				  >
				  Services
				</Button>
			  </Stack>
			</Stack>
			<Flex
			  flex={1}
			  justify={'center'}
			  align={'center'}
			  position={'relative'}
			  w={'full'}>
			  <Box
				position={'relative'}
				height={'300px'}
				rounded={'2xl'}
				boxShadow={'2xl'}
				width={'full'}
				overflow={'hidden'}>
				
				<Image
				  alt={'Hero Image'}
				  fit={'contain'}
				  align={'center'}
				  w={'100%'}
				  h={'100%'}
				  src={dogandman}
				/>
			  </Box>
			</Flex>
		  </Stack>
		</Container>
	  );
	}
	
	function AirbnbExample() {
		  const property = {
			imageUrl: "https://bit.ly/2Z4KKcF",
			imageAlt: "Photo of David Sheperd",
			reviewCount: 34,
			rating: 4
		  };
		
		  return (
		<Flex
				flex={1}
				justify={'center'}
				align={'center'}
				position={'relative'}
				w={'full'}>
			<Box maxW="sm" width={'full'} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow={'2xl'} position={'relative'}> 
			  <Image src="https://source.unsplash.com/random" alt={property.imageAlt} />
			  <Box p="6">
				<Box d="flex" alignItems="baseline">
				  <Badge borderRadius="full" px="2" colorScheme="teal">
					Doctor of Veterinarian Medcine
				  </Badge>
				  <Box
					color="gray.500"
					fontWeight="semibold"
					letterSpacing="wide"
					fontSize="xs"
					textTransform="uppercase"
					ml="2"
				  >
					28 years
				  </Box>
				</Box>
		
				<Heading>
				David Shepard
				</Heading>
		
				<Box>
				  {property.formattedPrice}
				  <Box as="span" color="gray.600" fontSize="sm">
				
				  </Box>
				</Box>
				<Box d="flex" mt="2" alignItems="center">
				  
				  
				</Box>
			  </Box>
			</Box>
			</Flex>
		  );
		}
			
	reactdom.render(
		  <ChakraProvider>
			  <CallToActionWithVideo/>
				  <SimpleGrid columns={2} spacing='8'>
				  	<AirbnbExample/>
					<AirbnbExample/>
					<AirbnbExample/>
				  </SimpleGrid>
		  </ChakraProvider>,
		  document.getElementById('root')
		);
	
	// export const Blob = (props: IconProps) => {
	//   return (
	// 	<Icon
	// 	  width={'100%'}
	// 	  viewBox="0 0 578 440"
	// 	  fill="none"
	// 	  xmlns="http://www.w3.org/2000/svg"
	// 	  {...props}>
	// 	  <path
	// 		fillRule="evenodd"
	// 		clipRule="evenodd"
	// 		d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
	// 		fill="currentColor"
	// 	  />
	// 	</Icon>
	//   );
	// };