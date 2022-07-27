import { 
	Avatar, Box, HStack, VStack,
	Text, Heading
} from '@chakra-ui/react'
import React from 'react'

const SellerCard = () => (
	<VStack minW={155} p={4}>
		<Avatar size='md' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
		<Heading size="sm">allen john</Heading>
		<Text color="gray.500" fontWeight="bold" fontSize={12}>$3,454</Text>
	</VStack>
)

export const TopSeller = () => {

	return (
		<Box>
			<HStack justify="space-between">
				<Heading py={5} size="lg">Top Seller</Heading>
				<Heading size="xs">See All</Heading>
			</HStack>
			<HStack overflowX={{base:'scroll',lg:'hidden'}}>
				<SellerCard />
				<SellerCard />
				<SellerCard />
				<SellerCard />
				<SellerCard />
				<SellerCard />
			</HStack>
		</Box>
	)
}
