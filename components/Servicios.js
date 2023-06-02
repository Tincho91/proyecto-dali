'use client'

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Box, Grid, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';

const MotionText = motion(Text);

const Servicios = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 260, damping: 20 },
      });
    }
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) {
      controls2.start({
        x: 0,
        opacity: 1,
        transition: { type: 'spring', stiffness: 260, damping: 20 },
      });
    }
  }, [controls2, inView2]);

  return (
    <Box pt={"5"} id="servicios">
      <Box width={"100%"} maxW={"1200px"} mx={"auto"}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          zIndex="1"
        >
          <Box
            className="box1"
            minH="405px"
            maxH={'100%'}
            width={"100%"}
            bgImage="/images/servicios1.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            transition="background-image 0.3s"
            order={{ base: 2, md: 1 }}
          />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={"15%"}
            minH="405px"
            maxH="70vh"
            order={{ base: 1, md: 2 }}
          >
            <MotionText
              initial={{ x: 300, opacity: 0 }}
              animate={controls1}
              color={"primary.400"}
              fontSize={{ base: "6.5vw", md: "4.5vw", lg: "40px" }}
              lineHeight={"1.2em"}
              textAlign={"center"}
              fontWeight={900}
              pb={5}
              ref={ref1}
            >
              COMPRA Y VENTA DE SCRAP
            </MotionText>
            <MotionText
              initial={{ x: 300, opacity: 0 }}
              animate={controls1}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              color={"gray.500"}
              fontSize={{ base: "16px", md: "2vh", lg: "18px" }}
              lineHeight={"1.5em"}
              textAlign={"center"}
              fontWeight={500}
              ref={ref1}
            >
              Compramos todo tipo de desechos derivados del proceso insdustrial
              de termoplásticos -polietilenos y polipropilenos, de alta y baja
              densidad- provenientes de fábricas. Los recuperamos con nuestros
              equipos y luego los comercializamos.
            </MotionText>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={"15%"}
            minH="405px"
            maxH="70vh"
            order={3}
          >
            <MotionText
              initial={{ x: 300, opacity: 0 }}
              animate={controls1}
              color={"primary.400"}
              fontSize={{ base: "6.5vw", md: "4.5vw", lg: "40px" }}
              lineHeight={"1.2em"}
              textAlign={"center"}
              fontWeight={900}
              pb={5}
              ref={ref2}
            >
              RECUPERACIÓN A FASÓN
            </MotionText>
            <MotionText
              initial={{ x: -300, opacity: 0 }}
              animate={controls2}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              color={"gray.500"}
              fontSize={{ base: "16px", md: "2vh", lg: "18px" }}
              lineHeight={"1.5em"}
              textAlign={"center"}
              fontWeight={500}
              ref={ref2}
            >
              Compramos todo tipo de desechos derivados del proceso insdustrial
              de termoplásticos -polietilenos y polipropilenos, de alta y baja
              densidad- provenientes de fábricas. Los recuperamos con nuestros
              equipos y luego los comercializamos.
            </MotionText>
          </Flex>
          <Box
            minH="405px"
            maxH={'100%'}
            className="box2"
            width={{ base: "100%", md: "100%" }}
            bgImage="/images/servicios3.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            transition="background-image 0.3s"
            order={4}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Servicios;
