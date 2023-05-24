'use client'

import React from "react";
import { Box, Button, Grid, Input, Text, Textarea, useColorModeValue, useMediaQuery } from "@chakra-ui/react";


const Contacto = () => {
  const gradient = useColorModeValue("linear(to-b, primary.400, white)", "linear(to-b, primary.400, white)");
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box id="contacto" bgGradient={gradient} p={8} transform={isLandscape ? "translateY(-12vh)" : "translateY(-10vh)"}>
      <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <Box>
            <Text 
              fontSize={{base: "30px", md: "3.2vw", lg: "50px"}} 
              mb={5} 
              color={"white"} 
              fontWeight={"700"} 
              letterSpacing={"8px"}
            >
              CONTACTO
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={3}>
              <Input placeholder="Nombre" bg={"white"}/>
              <Input placeholder="Apellido" bg={"white"}/>
              <Input placeholder="Teléfono" bg={"white"}/>
              <Input placeholder="Empresa" bg={"white"}/>
            </Grid>
            <Input placeholder="Email" my={3} bg={"white"}/>
            <Textarea placeholder="Mensaje" height="150px" mb={3} bg={"white"} resize={"none"}/>
            <Button bg={"primary.400"} color={"white"}>Enviar</Button>
          </Box>
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9839668239215!2d-57.610248424632005!3d-38.00083444475174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8d05be46481%3A0x3292074ba66cdc06!2sDALI%20TERMOPLASTICOS!5e0!3m2!1ses!2sar!4v1684618187433!5m2!1ses!2sar"
            minH={"350px"}
            height={"100%"}
            width={"100%"}
            shadow={"lg"}
            borderRadius={"lg"}
            justifySelf={{ lg: "end" }}
            allowfullscreen=""
            loading="lazy"
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contacto;