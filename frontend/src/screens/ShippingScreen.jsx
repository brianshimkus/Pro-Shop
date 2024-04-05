import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

export default function ShippingScreen() {
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [postalCode, setPostalCode] = useState('')
	const [country, setCountry] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		console.log('submit')
	}

	return (
		<FormContainer>
			<h1>Shipping</h1>
			<Form onSubmit={submitHandler}>
				<Form.Group controlId='address' className='my-2'>
					<Form.Label>Address</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter address'
						value={address}
						onChange={(e) => setAddress(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group className='my-2' controlId='city'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter city'
						value={city}
						required
						onChange={(e) => setCity(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group className='my-2' controlId='postalCode'>
					<Form.Label>Postal Code</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter postal code'
						value={postalCode}
						required
						onChange={(e) => setPostalCode(e.target.value)}></Form.Control>
				</Form.Group>

				<Form.Group className='my-2' controlId='country'>
					<Form.Label>Country</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter country'
						value={country}
						required
						onChange={(e) => setCountry(e.target.value)}></Form.Control>
				</Form.Group>
				<Button type='submit' variant='primary'>
					Continue
				</Button>
			</Form>
		</FormContainer>
	)
}
