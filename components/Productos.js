'use client'
import React from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import PrimerSeparator from "./utils/PrimerSeparator";
import Carousel from "./utils/Carousel";
import SegundoSeparator from "./utils/SegundoSeparador";


const images = [
  {
    src: "/images/img3.png",
    alt: "Polipropileno",
    title: "POLIPROPILENO (PP)",
    text:
      "Vendemos polipropileno cristal y de colores de alta densidad para distintos usos; soplado de envases, extrusión de cañerías e inyección de piezas.",
  },
  {
    src: "/images/img4.png",
    alt: "Pigmentos y Tintas",
    title: "PIGMENTOS MASTERBATCHES Y TINTAS FLEXOGRÁFICAS",
    text:
      "Distribuimos en Mar del Plata y zona, desde 1990 somos representantes de Julio García e Hijos S.A. y Concentrados y Compuestos S.A. También distribuimos tintas, barnices, aditivos y otros insumos relacionados, provistos por Servicolores S.R.L.",
  },
  {
    src: "/images/img2.png",
    alt: "Polietileno",
    title: "POLIETILENO (PE)",
    text:
      "Comercializamos polietilenos de alta y baja densidad para varios usos, películas de film, soplado de envases, extrusión de cañerías, inyección de piezas y cajones.",
  },
  {
    src: "/images/img1.png",
    alt: "Compuestos",
    title: "POLIPROPILENO",
    text: "Preparamos compuestos en PE y PP según los requerimientos de cada cliente.",
  },
  {
    src: "/images/img3.png",
    alt: "Polipropileno",
    title: "POLIPROPILENO (PP)",
    text:
      "Vendemos polipropileno cristal y de colores de alta densidad para distintos usos; soplado de envases, extrusión de cañerías e inyección de piezas.",
  },
  {
    src: "/images/img4.png",
    alt: "Pigmentos y Tintas",
    title: "PIGMENTOS MASTERBATCHES Y TINTAS FLEXOGRÁFICAS",
    text:
      "Distribuimos en Mar del Plata y zona, desde 1990 somos representantes de Julio García e Hijos S.A. y Concentrados y Compuestos S.A. También distribuimos tintas, barnices, aditivos y otros insumos relacionados, provistos por Servicolores S.R.L.",
  },
  {
    src: "/images/img2.png",
    alt: "Polietileno",
    title: "POLIETILENO (PE)",
    text:
      "Comercializamos polietilenos de alta y baja densidad para varios usos, películas de film, soplado de envases, extrusión de cañerías, inyección de piezas y cajones.",
  },
  {
    src: "/images/img1.png",
    alt: "Compuestos",
    title: "POLIPROPILENO",
    text: "Preparamos compuestos en PE y PP según los requerimientos de cada cliente.",
  },
];


const Productos = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo

  return (
    <Box mt={"13vh"} bg="primary.400" position={"relative"}>
      <Box transform={isLandscape ? "translateY(-6vh)" : "translateY(-20px)"}>
        <PrimerSeparator />
      </Box>
      <Box>
        <Carousel images={images} />
      </Box>
      <Box>
        <SegundoSeparator />
      </Box>
    </Box>
  );
};

export default Productos;