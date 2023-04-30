import { ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from 'next/app'

import theme from '../src/theme';
import '../src/theme/styles.css';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp