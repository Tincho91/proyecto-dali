"use client";

import { Box, Image, Text, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box>
      <Flex
        pt={10}

        height={{ base: "450px", md: "50vh" }}
        zIndex={3}
        w={"100%"}
        bg="gray.100"
        position={"relative"}
      >
        <Box
          w={"95%"}
          maxW={"1200px"}
          mx={"auto"}
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "3fr 1fr" }}
          gap={1}
        >
          <Flex
            textAlign={{ base: "center", md: "left" }}
            direction={"column"}
          >
            <Text
              color={"white"}
              pb={1}
              fontSize={{ base: "5.5vw", md: "3vh" }}
              letterSpacing={8}
              fontWeight={800}
            >
              SUSTENTABILIDAD
            </Text>
            <Text
              color={"white"}
              pb={5}
              fontSize={{ base: "14px", md: "1.4vw" }}
            >
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar
              la competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text
              color={"white"}
              fontSize={{ base: "14px", md: "1.4vw" }}
              pb={10}
            >
              Entendemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Flex>
          <Box
            className="whiteRecicleImg"
            position={{ base: "relative", md: "absolute" }}
            height={{ base: "37vw", md: "65vh" }}
            width={{ base: "37vw", md: "75vh" }}
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            margin="auto"
            right={{ md: "0"}}
            transform={{ md: "translateX(70%)", lg: "translateX(60%)", xl: "translateX(25vw)" }}
          >
            <Image src="/images/ReCicleWhite.png" alt="Reciclaje" />
          </Box>
        </Box>
      </Flex>
      <Box position="relative" transform="translateY(-15vh)" zIndex={2}>
        <TercerSeparador />
      </Box>
      <Box
        width={"100%"}
        maxW={"1200px"}
        mx={"auto"}
        transform={isLandscape ? "translateY(-11vh)" : "translateY(-20px)"}
        position={"relative"}
        zIndex={1}
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
          <Box
            className="box3"
            minH={{ base: "50vw", md: "60vh" }}
            maxH={"100%"}
            width={"100%"}
            bgImage="/images/servicios5.png"
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
              color={"gray.500"}
              fontSize={{ base: "14", md: "2vh" }}
              lineHeight={"2em"}
              textAlign={"center"}
              fontWeight={500}
            >
              Somos miembros de la "Cámara de la Industria Plástica de Mar del
              Plata y Zona de Influencia", instituión que tiene como principales
              objetivos, trabajar en pos de la valorización y disposición
              sustentable de los residuos plásticos, abordando la
              sensibilización y formación de la sociedad y acompañando al sector
              productivo en el desarrollo de nuevos productos.
            </Text>
          </Flex>
        </Grid>
      </Box>
    </Box>
  );
};

export default Sustentabilidad;
