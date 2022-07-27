// theme.js
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
	fonts: {
		heading: '	Lato, sans-serif',
		body: 'Lato,  sans-serif',
	},
	components: {
		Button: {
			baseStyle: {
				fontWeight: 'normal',
				_focus: {
					boxShadow:'none'
				}
      },
		},
	},
	
})

