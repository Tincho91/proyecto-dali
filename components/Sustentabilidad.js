'use client'
import { Box, Image, Text, Flex, useMediaQuery } from "@chakra-ui/react";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box>
      <Flex
        p={5}
        justifyContent="space-between"
        alignItems="center"
        overflow="hidden"
        height={"50vh"}
        zIndex="1"
        w={"100%"}
        bg="gray.100"
      >
        <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
          <Box
            justifyContent={{base: "center"}}
          >
            <Text 
              color={"white"} 
              mb={3} 
              fontSize={"4vw"} 
              letterSpacing={8} 
              fontWeight={800}
              textAlign={{base: "center", md: "left"}}
            >
              SUSTENTABILIDAD
            </Text>
            <Text color={"white"} mb={3} >
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar la
              competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text color={"white"}>
              Entenemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          zIndex="10"
        >
          <Image
            src="/images/ReCicleWhite.png"
            alt="Reciclaje"
            className="recicleWhite"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Sustentabilidad;
