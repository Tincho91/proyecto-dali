'use client'

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../styles/theme';
import Index from '@/pages';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="description" content="Descubre cómo nuestra empresa se dedica a la extrusión de termoplásticos y comercializa productos reciclados de alta calidad. Ofrecemos servicios de recuperación de residuos plásticos industriales, apostando a la economía circular como modelo productivo. Nuestros procesos mejoran la competitividad y la eficiencia de los recursos disponibles. Compramos y vendemos scrap y ofrecemos servicios de recuperación a fasón. Nuestros productos incluyen polipropileno (PP), polietileno (PE), pigmentos masterbatches y tintas flexográficas." />
        <meta name="keywords" content="Dali termoplásticos, plástico, reciclado, reciclaje, extrusión de termoplásticos, productos reciclados, recuperación de residuos plásticos, economía circular, competitividad, eficiencia, compra y venta de scrap, recuperación a fasón, polipropileno, polietileno, pigmentos masterbatches, tintas flexográficas" />
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
        <title>Dali Termoplásticos</title>
      </Head>
      <Index />
    </ChakraProvider>
  );
}

export default MyApp;
