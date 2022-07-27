import React from 'react'
import {
	Text,Box, Heading, colorMode,Image, useColorMode,
	Grid, VStack, Stack, HStack, Avatar, Button 
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const HotItemCard = () => (
	<Stack borderWidth={3}
		borderColor="transparent" style={{
			backgroundImage: `
          ${useColorMode().colorMode == 'light' ? 'linear-gradient(#f7fafc, #f7fafc)' : 'linear-gradient(black, black)'},
          ${useColorMode().colorMode == 'light' ? 'linear-gradient(#f7fafc, #f7fafc)' : 'linear-gradient(black, black)'},
          linear-gradient(to right, gray, yellow, pink)`,
			backgroundOrigin: 'border-box',
			backgroundClip: 'content-box, padding-box, border-box'
		}}  rounded={5}>
		<Stack p={3} align="center" cursor="pointer" rounded={5} pos="relative" h={250} bgPos="center" bgSize="cover" bgImage="">
			<Image rounded={5} fit="inherit" h={230} src="https://api.mypethooligan.com/img/1532.png" alt="logo" />
		</Stack>
		<Stack spacing={1} p={3}>
			<HStack justify="space-between">
				<Heading size="xs">Evol Vampire Avatar</Heading>
				<Avatar size='2xs' bg="none" name='Dan Abrahmov' src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png" />
			</HStack>
			<Text fontWeight="bold" fontSize={11} color="gray.500">Highest Bid 1/1</Text>
			<HStack justify="space-between">
				<Heading color="red.500" cursor="pointer"  size="xs">Buy Now</Heading>
				<Button color="white" bg="red.500" p={1} rounded="full" size="2xs">
					<ArrowForwardIcon />
				</Button>
			</HStack>
		</Stack>
	</Stack>
)

export const HotItems = () => {
	return (
		<Box my={5}>
			<HStack justify="space-between">
				<Heading py={5} size="lg">Hot Items</Heading>
				<Heading size="xs">See All</Heading>
			</HStack>
			<Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} gap={3}>
				{
					[0,1,2,3,4,5,6,7].map((e, i) => (
						<HotItemCard key={i} />
					))
				}
			</Grid>
		</Box>
	)
}
