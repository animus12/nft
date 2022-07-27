import { Box, Container } from '@chakra-ui/react'
import { HeroSection } from '../components/HeroSection'
import { HotCollections } from '../components/HotCollections'
import { HotItems } from '../components/HotItems'
import { TopSeller } from '../components/TopSeller'
import { Applayout } from '../layouts/Applayout'
export default function Home() {
  return (
		<Applayout>
			<HeroSection />
			<HotItems />
			<HotCollections />
			<TopSeller />
		</Applayout>
  )
}
