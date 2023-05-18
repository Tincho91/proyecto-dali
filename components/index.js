'use client'
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Hero from './Hero';
import Productos from './Productos';
import Servicios from './Servicios';
import Sustentabilidad from './Sustentabilidad';

const Index = () => {
  return (
    <Box  bg='white'>
      <Navbar />
      <Hero />
      <Productos />
      <Servicios />
      <Sustentabilidad />
    </Box>
  );
};

export default Index;