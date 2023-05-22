'use client'
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FontSizeContext from '@/components/utils/FontSizeContext';
import theme from '../styles/theme';
import Index from '@/components';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [textSize, setTextSize] = useState(null);

  function calculateTextSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const size = Math.min(width, height) * 0.02; // Ajusta este cálculo como necesites
    return size;
  }

  useEffect(() => {
    function handleResize() {
      setTextSize(calculateTextSize());
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <FontSizeContext.Provider value={textSize}>
        <Index />
      </FontSizeContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
