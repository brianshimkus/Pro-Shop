import { useParams } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { useGetOrderDetailsQuery } from '../slices/ordersApiSlice'

export default function OrderScreen() {
	const { id: orderId } = useParams()

	const { data: order, isLoading, error } = useGetOrderDetailsQuery(orderId)

	return isLoading ? (
		<Loader />
	) : error ? (
		<Message variant='danger' />
	) : (
		<>
			<h1>Order {order._id}</h1>
			<Row>
				<Col md={8}>Column</Col>
				<Col md={4}>Column</Col>
			</Row>
		</>
	)
}
