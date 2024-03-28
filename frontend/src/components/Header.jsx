import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png'

export default function Header() {
	const { cartItems } = useSelector((state) => state.cart)

	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<img src={logo} alt='Pro Shop' /> Pro Shop
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<FaShoppingCart /> Cart{' '}
									{cartItems.length > 0 && (
										<Badge pill bg='success' style={{ marginLeft: '5px' }}>
											{cartItems.reduce((acc, item) => acc + item.qty, 0)}
										</Badge>
									)}
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/login'>
								<Nav.Link>
									<FaUser /> Sign In
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}
