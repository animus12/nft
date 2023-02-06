import React from 'react'
import {
	Box, Grid, Heading, HStack,
	Avatar, Stack, Text
} from '@chakra-ui/react'

const CollectionItem = () => (
	<Box rounded="lg" p={3} h={140} w="full" bg="red.100">
		<HStack mt={20}>
			<Avatar size="sm"></Avatar>
			<Stack spacing={0}>
				<Heading size="sm">John doe</Heading>
				<Text fontWeight="bold" fontSize={11}>$3,506</Text>
			</Stack>
		</HStack>
	</Box>
)

export const HotCollections = () => {
	return (
		<Box my={5}>
			<HStack justify="space-between">
				<Heading py={5} size="lg">Hot Collections</Heading>
				<Heading size="xs">See All</Heading>
			</HStack>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={3}>
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
				<CollectionItem />
			</Grid>
		</Box>
	)
}
