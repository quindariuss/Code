import reactdom from 'react-dom'
import * as Yup from 'yup'
import
{
	ChakraProvider,
	Heading,
	Text,
	Link,
} from '@chakra-ui/react'
import { Formik, Field, Form, ErrorMessage } from 'formik';




const SignupForm = () => {
	return(
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Your firstname must be 15 characters or less')
					.required('You have to have a first name by law'),
				firstName: Yup.string()
					.max(20, 'Your last name must be 20 characters or less')
					.required('You have to have a last name by law'),
				email: Yup.string()
					.email('Invalid email address')
					.required('You have to have a email  by law'),
			})}
			onSubmit={(values, {setSubmitting})=> {
				setTimeout(()=>{
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
				}, 400);
			}}
		>
		<Form>
			<label htmlFor="firstName">First Name</label>
			<Field name="firstName" type="text"/>
			<ErrorMessage name="firstName"/>
			<label htmlFor="lastName">Last Name</label>
			<Field name="lastName" type="text"/>
			<ErrorMessage name="lastName"/>
			<label htmlFor="email">Email Address</label>
			<Field name="email" type="email"/>
			<ErrorMessage name="email"/>
		</Form>
		</Formik>
	)
}

reactdom.render
(
	<ChakraProvider>
		<SignupForm/>
	</ChakraProvider>,
	document.getElementById('root')
)