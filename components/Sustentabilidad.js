"use client";

import { Box, Image, Text, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box>
      <Flex
        pt={10}
        height={"50vh"}
        zIndex={4}
        w={"100%"}
        bg="gray.100"
        position={"relative"}
      >
        <Box
          w={"95%"}
          maxW={"1200px"}
          mx={"auto"}
          display="grid"
          gridTemplateColumns={"3fr 1fr"}
          gap={1}
          h={"100%"}
        >
          <Flex textAlign={"left"} direction={"column"} w={"100%"}>
            <Text
              color={"white"}
              pb={10}
              letterSpacing={5}
              fontWeight={800}
              fontSize={{ base: "6.5vw", md: "4.5vw", lg: "50px" }}
            >
              SUSTENTABILIDAD
            </Text>
            <Text color={"white"} pb={10} sizeFactor={1.4}>
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar
              la competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text color={"white"} sizeFactor={1.4}>
              Entendemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Flex>
          <Box
            className="image-container"
            overflow="hidden"
            transform={{base:`translateX(00%) translateY(-20%)`}}
            height="75vh"
            width="75vh"
          >
            <Image
              src="/images/ReCicleWhite.png"
              alt="Reciclaje"
              height="100%"
              width="100%"
            />
          </Box>
        </Box>
      </Flex>
      <Box position="relative" transform="translateY(-15vh)" zIndex={3}>
        <TercerSeparador />
      </Box>
      <Box
        width={"100%"}
        maxW={"1200px"}
        mx={"auto"}
        transform={isLandscape ? "translateY(-11vh)" : "translateY(-20px)"}
        position={"relative"}
        zIndex={2}
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
            bgSize="fill"
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
