'use client'
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme';
import Index from '@/components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Index />
    </ChakraProvider>
  );
}

export default MyApp;