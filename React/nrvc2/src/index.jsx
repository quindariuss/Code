import react from 'react'
import reactdom from 'react-dom'
import 
{ 
	ChakraProvider,
	Heading,
	Text,
} from "@chakra-ui/react"

reactdom.render
(
	<ChakraProvider>
	<Heading size='4xl'>
		Hello World
	</Heading>
	<Text>
		Ei nostro et facilis eu nostrud eum debet latine sea in erat agam gubergren scriptorem nec. Sed ut ad postea facilisis eos et in at no eu pri assentior quot. His equidem causae ad timeam intellegebat ut voluptua ad petentium eleifend verear id dignissim est. Partiendo an verterem vix dicam cu pro ad persequeris eum at mel et. Dicta sententiae cum diam qui sit tota clita partiendo partem dissentiunt adipiscing ad mei modus congue.
	</Text>
	</ChakraProvider>,
	document.getElementById('root')
)