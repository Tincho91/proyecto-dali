"use client";
import { Box, Grid, Heading, Text, Flex } from "@chakra-ui/react";

const Servicios = () => {
  return (
    <Box pt={"3vh"}>
      <Box width={"100%"} maxW={"1200px"} mx={"auto"}>
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          zIndex="1"
        >
          <Box
            className="box1"
            minH={{ base: "50vw", md: "60vh" }}
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
            <Heading
              color={"primary.400"}
              fontSize={{base:"6.5vw", md: "3vh"}}
              lineHeight={"2em"}
              textAlign={"center"}
              fontWeight={900}
            >
              COMPRA Y VENTA DE SCRAP
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={{base:"2.5vw", md: "2vh"}}
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
            order={3}
          >
            <Heading
              color={"primary.400"}
              fontSize={{base:"6.5vw", md: "3vh"}}
              lineHeight={"2em"}
              textAlign={"center"}
              fontWeight={900}
            >
              RECUPERACIÓN A FASÓN
            </Heading>
            <Text
              color={"gray.500"}
              fontSize={{base:"2.5vw", md: "2vh"}}
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
            minH={{ base: "50vw", md: "60vh"}}
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
