import reactdom from 'react-dom'
import * as Yup from 'yup'
import
{
	ChakraProvider,
	Heading,
	Text,
	Link,
} from '@chakra-ui/react'
import { Formik } from 'formik'





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
		{formik => (

		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				{...formik.getFieldProps('firstName')}
				value={formik.values.firstName}
			/>
		{formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				{...formik.getFieldProps('lastName')}
				value={formik.values.lastName}
			/>
		{formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
			<label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				{...formik.getFieldProps('lastName')}
				value={formik.values.email}
			/>
		{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
			<button type="submit">Submit</button>
		</form>
		)}
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