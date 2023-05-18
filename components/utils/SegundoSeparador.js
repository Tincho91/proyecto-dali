import React from "react";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

const SegundoSeparator = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Flex
      position="relative"
      height={isLandscape ? "15vh" : "15vw"}
      minW={"50vw"}
      alignItems="center"
      justifyContent="center"
      background="transparent"
      top={0}
      zIndex={99}
    >
      <Flex
        className="separadorIzquierdo"
        flex="1"
        background="white"
        zIndex={"9"}
        height="100%"
        transform="skewY(6deg)"
        maxWidth={"50vw"}
        alignItems="center"
        justifyContent="center"
        position="relative"
        top="50%"
      ></Flex>
      <Flex
        className="separadorDerecho"
        flex="1"
        background="white"
        height="100%"
        zIndex={"9"}
        transform="skewY(-6deg)"
        maxWidth={"50vw"}
        alignItems="center"
        justifyContent="center"
        position="relative"
        top="50%"
      >
        <Text
            color={"primary.400"}
            fontSize={{base: "6.5vw", md: "4.5vw", lg: "50px"}}
            fontWeight={800}
            letterSpacing='0.1em'
        >
          SERVICIOS
        </Text>
      </Flex>
    </Flex>
  );
};

export default SegundoSeparator;
