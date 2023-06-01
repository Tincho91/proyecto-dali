import React, { useRef, useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Productos from './Productos';
import Servicios from './Servicios';
import Sustentabilidad from './Sustentabilidad';
import Contacto from './Contacto';
import Footer from './Footer';
import WhatsappButton from './utils/WhatsApp';

const Index = () => {
  const footerRef = useRef();
  const [buttonPosition, setButtonPosition] = useState(8);
  const [isSmallerScreen] = useMediaQuery("(max-width: 480px)");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (isSmallerScreen) {
            setButtonPosition(100); // Actualiza la posición solo en pantallas pequeñas
          }
        } else {
          setButtonPosition(8);
        }
      },
      { threshold: 0.1 } // Ajusta el threshold según sea necesario
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [isSmallerScreen]);

  return (
    <Box bg='white'>
      <Navbar />
      <Hero />
      <Productos />
      <Servicios />
      <Sustentabilidad />
      <Contacto />
      <Footer footerRef={footerRef} />
      <WhatsappButton buttonPosition={buttonPosition} />
    </Box>
  );
};

export default Index;
