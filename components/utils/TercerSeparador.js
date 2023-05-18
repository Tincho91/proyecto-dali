import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const TercerSeparador = () => {
  return (
    <Flex
      position="relative"
      height="15vh"
      minW={"50vw"}
      alignItems="center"
      justifyContent="center"
      background="transparent"
      top={0}
      zIndex={99}
    >
      <Flex
        flex="1"
        background="gray.100"
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
        flex="1"
        background="gray.100"
        height="100%"
        zIndex={"9"}
        transform="skewY(-6deg)"
        maxWidth={"50vw"}
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
