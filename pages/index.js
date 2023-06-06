import React, { useRef, useState, useEffect } from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Productos from '../components/Productos';
import Servicios from '../components/Servicios';
import Sustentabilidad from '../components/Sustentabilidad';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import WhatsappButton from '../components/utils/WhatsApp';

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
