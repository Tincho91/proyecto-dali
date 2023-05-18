"use client";
import { Box, Grid, Heading, Text, Flex, Image } from "@chakra-ui/react";

const Servicios = () => {
  return (
    <Box>
      <Box width={"100%"} maxW={"1200px"} mx={"auto"}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          zIndex="1" // Add a zIndex value here
        >
          <Box
            className="box1"
            maxH="70vh"
            width={{ base: "100vw", md: "100%" }}
            maxW={"50vw"}
            bgImage="/images/servicios1.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            transition="background-image 0.3s"
          />
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding={"15%"}
            maxH="70vh"
            maxW={"50vw"}
          >
            <Heading
              color={"primary.400"}
              fontSize={"2.3vw"}
              lineHeight={"2em"}
              textAlign={"center"}
              fontWeight={900}
            >
              COMPRA Y VENTA DE SCRAP
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={"1.8vw"}
              lineHeight={"2em"}
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
            maxW={"50vw"}
          >
            <Heading
              color={"primary.400"}
              fontSize={"2.3vw"}
              lineHeight={"2em"}
              textAlign={"center"}
              fontWeight={900}
            >
              RECUPERACIÓN A FASÓN
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={"1.8vw"}
              lineHeight={"2em"}
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
            className="box2"
            width={{ base: "100%", md: "100%" }}
            bgImage="/images/servicios3.png"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            transition="background-image 0.3s"
            maxH="70vh"
            maxW={"50vw"}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Servicios;
