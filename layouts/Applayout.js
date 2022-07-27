import { Box, Container } from '@chakra-ui/react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const Applayout = ({children}) => {
	return (
		<Box>
			<Header />
			<Container maxW="container.lg">
				{children}
			</Container>
			<Footer />
		</Box>
	)
}

