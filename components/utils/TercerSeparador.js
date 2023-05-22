import React from "react";
import { Flex } from "@chakra-ui/react";

const TercerSeparador = () => {
  return (
    <Flex
      height="15vh"
      minW={"50vw"}
      alignItems="center"
      justifyContent="center"
      top={0}
    >
      <Flex
        flex="1"
        background="gray.100"
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
