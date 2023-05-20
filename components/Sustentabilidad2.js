'use client'
import { Box, Grid, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import TercerSeparador from "./utils/TercerSeparador";

const Sustentabilidad2 = () => {
    const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

    return (
        <Box>
            <Box position="relative" transform= "translateY(-8vh)" zIndex={1}>
                <TercerSeparador />
            </Box>
            <Box width={"100%"} maxW={"1200px"} mx={"auto"} transform={isLandscape ? "translateY(-8vh)" : "translateY(-20px)"}>
                <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                >
                    <Box
                        className="box3"
                        minH={{ base: "50vw", md: "60vh" }}
                        maxH={"100%"}
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
                        padding={"15%"}
                        maxH="70vh"
                        order={{ base: 1, md: 2 }}
                    >
                        <Text
                            color={"gray.500"}
                            fontSize={{ base: "2.5vw", md: "2vh" }}
                            lineHeight={"2em"}
                            textAlign={"right"}
                            fontWeight={500}
                        >
                            Somos miembros de la "Cámara de la Industria Plástica de Mar del Plata y Zona de Influencia", instituión que tiene como principales objetivos, trabajar en pos de la valorización y disposición sustentable de los residuos plásticos, abordando la sensibilización y formación de la sociedad y acompañando al sector productivo en el desarrollo de nuevos productos.
                        </Text>
                    </Flex>
                </Grid>
            </Box>
        </Box>
    );
};

export default Sustentabilidad2;