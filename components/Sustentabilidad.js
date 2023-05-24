'use client'

import { Box, Image, Text, Flex, Grid, useMediaQuery } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box w={"100vw"} id="sustentabilidad">
      <Box
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
        <Grid w="100%" maxW="1200px" templateColumns={"1fr 3fr"} gap={0} mx="auto">
          <Box
            className="image-container"
            position={"absolute"}
            gridColumn="1"
          >
            <Image
              src="/images/ReCicleWhite.png"
              alt="Reciclaje"
              transform={{
                base: isLandscape
                  ? "translateX(-60%) translateY(-20%)"
                  : "translateX(-70%) translateY(-20%)",
                md: isLandscape
                  ? "translateX(-60%) translateY(-17%)"
                  : "translateX(-70%) translateY(-20%)",
                lg: isLandscape
                  ? "translateX(-60%) translateY(-15%)"
                  : "translateX(-70%) translateY(-20%)",
              }}
              h={{
                base: isLandscape ? "500px" : "600px",
                md: isLandscape ? "650px" : "650px",
                lg: isLandscape ? "700px" : "750",
                xl: isLandscape ? "700px" : "850",
              }}
              w={{
                base: isLandscape ? "500px" : "600px",
                md: isLandscape ? "650px" : "650px",
                lg: isLandscape ? "700px" : "750",
                xl: isLandscape ? "700px" : "850",
              }}
            />
          </Box>
          <Flex
            flexDir="column"
            w="100%"
            pr={{base:"5%", xl: "0"}}
            textAlign="right"
            gridColumn="2"
          >
            <Text
              color={"white"}
              pb={10}
              letterSpacing={5}
              fontWeight={800}
              fontSize={{
                base: "5vw",
                md: "4.5vw",
                lg: "50px" 
              }}
            >
              SUSTENTABILIDAD
            </Text>
            <Text
              color={"white"}
              pb={10}
              fontSize={{ 
                base: "14.5px",
                sm: "2.7vw",
                md: "2.35vw", 
                lg: "2.6vw",
                xl: "30px"
              }}
              pl={"5%"}
            >
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar
              la competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text
              color={"white"}
              fontSize={{ 
                base: "14.5px",
                sm: "2.7vw",
                md: "2.35vw", 
                lg: "2.6vw",
                xl: "30px"
              }}
              pl={"5%"}
            >
              Entendemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Flex>
        </Grid>
      </Box>
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
            minH={ isLandscape ? "80vh" : "405px"}
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
            padding={"10%"}
            paddingTop={{ base: "20%", md: "25%" }}
            minH="405px"
            maxH="70vh"
            order={{ base: 1, md: 2 }}
          >
            <Text
              color={"gray.500"}
              fontSize={{base:"14px", md: "2.5vh", lg: "22px"}}
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
