'use client'
import { Box, Image, Text, Flex, useMediaQuery } from "@chakra-ui/react";

const Sustentabilidad = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box>
      <Flex
        p={10}
        height={"50vh"}
        zIndex="1"
        w={"100%"}
        bg="gray.100"
      >
        <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
          <Box
            width={"75%"}
            textAlign={"left"}
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
            <Text color={"white"} mb={5} fontSize={{base: "15px", md: "1.4vw"}}>
              Apostamos a la economía circular como modelo productivo para el
              cuidado del medio ambiente, y también como una manera de mejorar la
              competitividad y la eficiencia de los recursos disponibles.
            </Text>
            <Text color={"white"} fontSize={{base: "15px", md: "1.4vw"}}>
              Entenemos que el desarrollo sustentable requiere el consumo
              responsable de plásticos, su separación y su reciclado.
            </Text>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          zIndex="10"
          className="whiteRecicle"
          right={0}
          top={{base:"55%" }}
          transform={{base: "translateY(80%)"}}
          height={"75vh"}
          width={"75vh"}
        >
          <Image
            src="/images/ReCicleWhite.png"
            alt="Reciclaje"
            
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Sustentabilidad;
