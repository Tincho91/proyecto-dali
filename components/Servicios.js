'use client'

import { Box, Grid, Text, Flex, useMediaQuery } from "@chakra-ui/react";

const Servicios = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box pt={ isLandscape ? "5" : ""}>
      <Box width={"100%"} maxW={"1200px"} mx={"auto"}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          zIndex="1"
        >
          <Box
            className="box1"
            minH="60vh"
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
            maxH="70vh"
            order={{ base: 1, md: 2 }}
          >
            <Text
              color={"primary.400"}
              fontSize={{base: "6.5vw", md: "4.5vw", lg: "40px"}}
              lineHeight={"1.2em"}
              textAlign={"center"}
              fontWeight={900}
            >
              COMPRA Y VENTA DE SCRAP
            </Text>
            <Text
              color={"gray.500"}
              fontSize={{base:"14px", md: "2vh", lg: "18px"}}
              lineHeight={"1.5em"}
              textAlign={"center"}
              fontWeight={500}
            >
              Compramos todo tipo de desechos derivados del proceso insdustrial
              de termoplásticos -polietilenos y polipropilenos, de alta y baja
              densidad- provenientes de fábricas. Los recuperamos con nuestros
              equipos y luego los comercializamos.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={"15%"}
            maxH="70vh"
            order={3}
          >
            <Text
              color={"primary.400"}
              fontSize={{base: "6.5vw", md: "4.5vw", lg: "40px"}}
              lineHeight={"1.2em"}
              textAlign={"center"}
              fontWeight={900}
            >
              RECUPERACIÓN A FASÓN
            </Text>
            <Text
              color={"gray.500"}
              fontSize={{base:"14px", md: "2vh", lg: "18px"}}
              lineHeight={"1.5em"}
              textAlign={"center"}
              fontWeight={500}
            >
              Reciclamos de manera integral termoplásticos. Devolvemos a cada
              cliente su mismo material, poniendo la mayor atención en la
              separación de colores, el filtrado y las temperaturas que permiten
              la reutilización de los materiales sin sufrir degradación;
              transformando nuevamente los rezagos plásticos en materia prima de
              óptima calidad.
            </Text>
          </Flex>
          <Box
            minH="60vh"
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
