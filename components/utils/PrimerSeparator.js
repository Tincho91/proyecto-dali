import React from "react";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";

const PrimerSeparator = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Flex
      position="relative"
      height={isLandscape ? "15vh" : "15vw"}
      minW={"50vw"}
      alignItems="center"
      justifyContent="center"
      background="transparent"
      bottom={0}
      zIndex={99}
    >
      <Flex
        flex="1"
        background="#489F82"
        height="100%"
        transform="skewY(6deg)"
        alignItems="center"
        justifyContent="center"
      >
        <Text 
            color={"white"}
            fontSize={{base: "5.5vw", md: "4.5vw", lg: "50px"}}
            fontWeight={800}
            letterSpacing='0.1em'
        >
          PRODUCTOS
        </Text>
      </Flex>
      <Box
        flex="1"
        background="#489F82"
        height="100%"
        transform="skewY(-6deg)"
      ></Box>
    </Flex>
  );
};

export default PrimerSeparator;
