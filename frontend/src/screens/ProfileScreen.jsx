import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

export default function ProfileScreen() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const { userInfo } = useSelector((state) => state.auth)

	const dispatch = useDispatch()

	useEffect(() => {
		if (userInfo) {
			setName(userInfo.name)
			setEmail(userInfo.email)
		}
	}, [userInfo])

	const submitHandler = (e) => {
		e.preventDefault()
		console.log('Submit')
	}

	return (
		<Row>
			<Col md={3}>Column</Col>
			<Col md={9}>Column</Col>
		</Row>
	)
}
