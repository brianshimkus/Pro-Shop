import { Container } from 'react-bootstrap'
import Header from './components/Header'

export default function App() {
	return (
		<>
			<Header />
			<main className='py-3'>
				<Container>
					<h1>Welcome to Pro Shop</h1>
				</Container>
			</main>
		</>
	)
}
