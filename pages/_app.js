'use client'

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../styles/theme';
import Index from '@/components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <Index />
    </ChakraProvider>
  );
}

export default MyApp;
