"use client";
import { Box, Heading, Image, Text, Flex } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";

const Sustentabilidad = () => {
  return (
    <Box overflow= "hidden"bg="gray.100">
      <Flex
        p={5}
        justifyContent="space-between"
        alignItems="center"
        overflow= "hidden"
        height={"40vh"}
        zIndex="1"
        w={'100%'}
        maxW={'1200px'}
        marginX={'auto'}
      >
        <Box maxW="70%">
          <Heading color={"white"} mb={3} fontSize={"5vw"} letterSpacing={8}>
            SUSTENTABILIDAD
          </Heading>
          <Text color={"white"}>
            Apostamos a la economía circular como modelo productivo para el
            cuidado del medio ambiente, y también como una manera de mejorar la
            competitividad y la eficiencia de los recursos disponibles.
          </Text>
          <Text color={"white"}>
            Entenemos que el desarrollo sustentable requiere el consumo
            responsable de plásticos, su separación y su reciclado.
          </Text>
        </Box>

        <Box
          position={''}
          zIndex="10"
          height={"72vh"}
          right="-35%"
          overflow= "hidden"
        >
          <Image
            src="/images/ReCicleWhite.png"
            alt="Reciclaje"
            width={"100%"}
            height={"100%"}
            className="recicleWhite"
            overflow= "hidden"
          />
        </Box>
      </Flex>
      <TercerSeparador />
    </Box>
  );
};

export default Sustentabilidad;
