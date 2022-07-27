import { 
	Box, Button, Container, Heading,
	HStack, List, ListItem, useColorMode,
	colorMode
} from '@chakra-ui/react'

import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Link from 'next/Link'


const navItem = [
	{ path: '/', label:'Explore'},
	{ path: 'category', label:'Category'},
	{ path: '#', label:'Collection'},
	{ path: '#', label:'Profile'},
]

export const Header = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Box zIndex={22} backdropFilter="blur(10px)" bg="rgb(226,232,240,0.2)" pos="fixed" w="full">
			<Container maxW="container.lg"> 
				<HStack justifyContent="space-between" py={2}>
					<Link href="/" passHref>
						<Heading size="md">Ace.Project</Heading>
					</Link>
						<List display="flex">
							{
								navItem.map((e, keyId) => (
									<Link key={keyId} href={e.path}>
										<ListItem _hover={{color:'red.500'}} cursor="pointer" pr={3}>{e.label}</ListItem>
									</Link>
								))
							}
						</List>
					<HStack>
						<Button size="sm" rounded={20}>Create</Button>
						<Button  size="sm" rounded={20}>Sign In</Button>
						<Button onClick={toggleColorMode} size="xs" rounded="full">{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
					</HStack>
				</HStack>
			</Container>
		</Box>
	)
}
