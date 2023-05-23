'use client'

import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Productos from './Productos';
import Servicios from './Servicios';
import Sustentabilidad from './Sustentabilidad';
import Contacto from './Contacto';
import Footer from './Footer';
import WhatsappButton from './utils/WhatsApp';

const Index = () => {
  return (
    <Box  bg='white'>
      <Navbar />
      <Hero />
      <Productos />
      <Servicios />
      <Sustentabilidad />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </Box>
  );
};

export default Index;