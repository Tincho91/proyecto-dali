'use client'

import { Box, Image, Text, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";
import RotatingImage from "./utils/RotatingImage";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo
  return (
    <Box>
      <Flex
        p={10}
        height={"50vh"}
        zIndex={3}
        w={"100%"}
        bg="gray.100"
        position={"relative"}
      >
        <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
          <Box
            width={{base: "100%", md: "70%"}}
            textAlign={"left"}
          >
            <Text
              color={"white"}
              mb={3}
              fontSize={"4vw"}
              letterSpacing={8}
              fontWeight={800}
              textAlign={{ base: "center", md: "left" }}
            >
              SUSTENTABILIDAD
            </Text>
            <Text
              color={"white"}
              mb={5}
              fontSize={{ base: "15px", md: "1.4vw" }}
            >
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar
              la competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text color={"white"} fontSize={{ base: "15px", md: "1.4vw" }}>
              Entenemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Box>
        </Box>
        <Box
          position={'absolute'}
          height={"70vh"}
          width={"70vw"}
          transform={{base:"translateX(0%) translateY(-0%)", md:"translateX(90%) translateY(-30%)"}}
        >
          <Image src="/images/ReCicleWhite.png" alt="Reciclaje" />
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
              fontSize={{ base: "14px", md: "2vw" }}
              lineHeight={"2em"}
              textAlign={"right"}
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
