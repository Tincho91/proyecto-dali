"use client";

import { Box, Image, Text, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box>
      <Flex
        pt={isLandscape ? "1" : "3"}
        h={{
          base: isLandscape ? "200px" : "350px",
          sm: isLandscape ? "350px" : "50vh",
          md: isLandscape ? "450px" : "50vh",
        }}
        maxH={{ base: "350px", lg: "500px" }}
        zIndex={4}
        w={"100%"}
        bg="gray.100"
        position={"relative"}
      >
        <Box
          w={"100%"}
          maxW={"1200px"}
          mx={"auto"}
          display="grid"
          gridTemplateColumns={"3fr 1fr"}
          gap={1}
          overflow="hidden"
          p={isLandscape ? "5" : "3"}
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
            <Text
              color={"white"}
              pb={10}
              fontSize={{ base: "15px", md: "2.3vw", lg: "20px" }}
            >
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar
              la competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text
              color={"white"}
              fontSize={{ base: "15px", md: "2.3vw", lg: "20px" }}
            >
              Entendemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Flex>
          <Box
            className="image-container"
            overflow="hidden"
            transform={{ base: `translateX(00%) translateY(-20%)` }}
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
        transform={isLandscape ? "translateY(-12vh)" : "translateY(-10vh)"}
        position={"relative"}
        zIndex={2}
      >
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
          <Box
            className="box3"
            minH={{
              base: isLandscape ? "80vh" : "60vh",
            }}
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
            padding={"10%"}
            paddingTop={{base: "20%", md: "25%"}}
            maxH="70vh"
            order={{ base: 1, md: 2 }}
          >
            <Text
              color={"gray.500"}
              fontSize={{
                base: isLandscape ? "14" : "",
                md: isLandscape ? "3vh" : "3.5vw",
                lg: isLandscape ? "3vh" : "30px"
              }}
              lineHeight={"1.4em"}
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
