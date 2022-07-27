import React from 'react'
import { 
	Box, Stack, Heading, Text, HStack, Button
} from '@chakra-ui/react'

export const HeroSection = () => {
	return (
		<Box pt={20}>
			<Box
			 rounded={6} 
			 bgPos="center" 
			 bgSize="cover" 
			 backgroundImage="https://nftaday.com/wp-content/uploads/2021/03/nft-2.jpeg" 
			 w="full" 
			 h={350}
			 >
				<Stack p={5} color="white">
					<Heading size="lg">Painting of the month</Heading>
					<Stack pt={180} spacing={0}>
						<Heading size="md">Jose Maria</Heading>
						<Heading size="xs" >Creator</Heading>
						<HStack pt={3}>
							<Heading fontWeight="light" color="gray.300" size="sm">Price</Heading>
							<Heading fontWeight="light" size="sm">$3,343</Heading>
							<Button variant="outline" size="sm" rounded={20}>Buy Now</Button>
						</HStack>
					</Stack>
				</Stack>
			</Box>
		</Box>
	)
}

