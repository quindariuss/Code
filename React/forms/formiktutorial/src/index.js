import reactdom from 'react-dom'
import * as Yup from 'yup'
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
			firstName:'',
			lastName:'',
			email:'',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
			.max(15, 'Must be 15 characters or less')
			.required('First name is required'),
			lastName: Yup.string()
			.max(20, 'Must be 20 characters or less')
			.required('First name is required'),
			email: Yup.string().email('Invalid email address').required('Required email')


		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null,2));
		},
	});

	return(
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.firstName}
			/>
		{formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.lastName}
			/>
		{formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
			<label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={formik.values.email}
			/>
		{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
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