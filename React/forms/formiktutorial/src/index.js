import reactdom from 'react-dom'
import
{
	ChakraProvider,
	Heading,
	Text,
	Link,
} from '@chakra-ui/react'

import { useFormik } from 'formik'

const SignupForm = () => {
	const formik = useFormik({
		initialValues:{
			email:'',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null,2));
		},
	});

	return(
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}


reactdom.render
(
	<ChakraProvider>
		<SignupForm/>
	</ChakraProvider>,
	document.getElementById('root')
)