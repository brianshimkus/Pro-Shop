import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import logo from '../assets/logo.png'

export default function Header() {
	return (
		<div>
			<Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
				<Container>
					<Navbar.Brand href='/'>
						<img src={logo} alt='Pro Shop' /> Pro Shop
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/cart'>
								<FaShoppingCart /> Cart
							</Nav.Link>
							<Nav.Link href='/login'>
								<FaUser /> Sign In
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}
