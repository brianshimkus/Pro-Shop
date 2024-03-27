import { Link, useParams } from 'react-router-dom'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import Rating from '../components/Rating'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'

export default function ProductScreen() {
	const { id: productId } = useParams()
	const {
		data: product,
		isLoading,
		error,
	} = useGetProductDetailsQuery(productId)

	return (
		<>
			{isLoading ? (
				<h2>Loading...</h2>
			) : error ? (
				<h2>{error?.data?.message || error.error}</h2>
			) : (
				<>
					<Link className='btn btn-light my-3' to='/'>
						Go Back
					</Link>
					<Row>
						<Col md={5}>
							<Image src={product.image} alt={product.name} fluid />
						</Col>
						<Col md={4}>
							<ListGroup>
								<ListGroup.Item>
									<h3>{product.name}</h3>
								</ListGroup.Item>
								<ListGroup.Item>
									<Rating
										value={product.rating}
										text={`${product.numReviews} reviews`}
									/>
								</ListGroup.Item>
								<ListGroup.Item>
									Description: {product.description}
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col md={3}>
							<Card>
								<ListGroup>
									<ListGroup.Item>
										<Row>
											<Col>Price:</Col>
											<Col>
												<strong>${product.price}</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Row>
											<Col>Status:</Col>
											<Col>
												<strong>
													{product.countInStock > 0
														? 'In Stock'
														: 'Out of Stock'}
												</strong>
											</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										<Button
											className='btn-block'
											disabled={product.countInStock === 0}>
											Add to Cart
										</Button>
									</ListGroup.Item>
								</ListGroup>
							</Card>
						</Col>
					</Row>
				</>
			)}
		</>
	)
}
