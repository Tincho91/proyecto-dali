import React from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";


const TercerSeparador = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Flex
      height= "15vh"
      minW={"100vw"}
      alignItems="center"
      justifyContent="center"
      top={0}
      background={"gray.100"}
    >
      <Flex
        flex="1"
        display={{base: isLandscape ? "block" : "none", md: "block"}}
        background="gray.100"
        height="100%"
        transform="skewY(6deg)"
        maxWidth={{base: isLandscape ? "50vw" : "100vw", md: "50vw"}}
        alignItems="center"
        justifyContent="center"
        position="relative"
        top="50%"
      ></Flex>
      <Flex
        flex="1"
        maxWidth={{base: isLandscape ? "50vw" : "100vw", md: "50vw"}}
        background="gray.100"
        height="100%"
        transform="skewY(-6deg)"
        alignItems="center"
        justifyContent="center"
        position="relative"
        top="50%"
      >
      </Flex>
    </Flex>
  );
};

export default TercerSeparador;
