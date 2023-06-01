'use client'

import React, { useState, useRef } from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  useBreakpointValue,
  Text,
  Flex,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import RotatingImage from "./utils/RotatingImage";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [isLandscape] = useMediaQuery("(orientation: landscape)"); // Detecta la orientación del dispositivo
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const carouselItems = [
    {
      src: "/images/hero2.png",
      textParts: [
        { text: "Nuestros PROCESOS", highlighted: true },
        { text: " mejoran la competitividad y la ", highlighted: false },
        { text: "EFICIENCIA", highlighted: true },
      ],
      position: {
        base: {
          top: "40%",
          right: isLandscape ? "19%" : "5",
          maxWidth: isLandscape ? "35%" : "50%",
        },
        md: { top: "20%", left: "5%", right: "20%", maxWidth: "35%" },
        lg: { top: "20%", left: "5%", right: "20%", maxWidth: "35%" },
      },
      fontSize: {
        base: isLandscape ? "2.5vw" : "5vw",
        md: isLandscape ? "2.5vw" : "3vw",
        lg: isLandscape ? "2.5vw" : "2.5vw",
        xl: isLandscape ? "35px" : "35px",
      },
    },
    {
      src: "/images/hero1.png",
      textParts: [
        { text: "Apostamos a la ", highlighted: false },
        { text: "ECONOMIA CIRCULAR", highlighted: true },
        { text: " como modelo productivo", highlighted: false },
      ],
      position: {
        base: { top: "30%", left: "5%", maxWidth: "39%" },
        md: { top: "35%", left: "5%", maxWidth: "39%" },
        lg: { top: "35%", left: "5%", maxWidth: "39%" },
      },
      fontSize: {
        base: isLandscape ? "2.5vw" : "5vw",
        md: isLandscape ? "2.5vw" : "3vw",
        lg: isLandscape ? "2.5vw" : "2.5vw",
        xl: isLandscape ? "35px" : "35px",
      },
    },
  ];

  const quoteText = [
    {
      parts: [
        { text: "Somos una empresa dedicada a la ", highlighted: false },
        { text: "extrusión de termoplásticos", highlighted: true },
        { text: " con más de 30 años de trayectoria en la ciudad de Mar del Plata.", highlighted: false },
      ],
    },
    {
      parts: [
        { text: "Comercializamos ", highlighted: false },
        { text: "productos reciclados", highlighted: true },
        { text: " de excelente calidad y brindamos ", highlighted: false },
        { text: "servicios de recuperación", highlighted: true },
        { text: " de residuos plásticos industriales.", highlighted: false },
      ],
    },
    {
      parts: [
        { text: "Quienes nos eligen tienen a la sustentabilidad como eje fundamental de la ", highlighted: false },
        { text: "responsabilidad social", highlighted: true },
        { text: " de sus empresas. A través del recupero, optimizan sus procesos productivos y costos.", highlighted: false },
      ],
    },
  ];

  const rotatingImageSrc = "/images/ReCircle.png";

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500000,
    pauseOnHover: false,
    fade: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const renderDots = () => {
    return carouselItems.map((_, index) => {
      const isActive = index === currentSlide;

      const handleDotClick = () => {
        // Use the slickGoToSlide method to change the slide
        sliderRef.current.slickGoTo(index);
      };

      return (
        <li key={index}>
          <button
            className={`custom-dot ${isActive ? "active-dot" : ""}`}
            onClick={handleDotClick}
          />
        </li>
      );
    });
  };

  return (
    <Box position="relative">
      <Box
        mt={7}
        width={"95%"}
        maxWidth={"1200px"}
        mx={"auto"}
        zIndex={1}
        position="relative"
      >
        <Slider as="Box" {...settings} ref={sliderRef}>
          {carouselItems.map((item, index) => {
            const position = useBreakpointValue(item.position);
            const fontSize = useBreakpointValue(item.fontSize);

            return (
              <Box
                position="relative"
                minH={isLandscape ? "60vh" : "40vh"}
                h="40vh"
                key={index}
              >
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  boxSize="full"
                  objectFit="cover"
                  rounded={"xl"}
                />
                <Box position="absolute" zIndex={2} {...position}>
                  <Text fontSize={fontSize} color="white">
                    {item.textParts.map((part, partIndex) =>
                      part.highlighted ? (
                        <Box
                          as="span"
                          bg="#489F82"
                          color="white"
                          px={1}
                          borderRadius="md"
                          whiteSpace="nowrap"
                          key={partIndex}
                        >
                          {part.text}
                        </Box>
                      ) : (
                        <Box as="span" key={partIndex}>
                          {part.text}
                        </Box>
                      )
                    )}
                  </Text>
                </Box>
              </Box>
            );
          })}
        </Slider>
        <ul className="custom-dots">{renderDots()}</ul>
      </Box>
      <Box
        className="rotatingImage"
        position={"absolute"}
        zIndex={"0"}
        w="60vw"
        h="60vw"
      >
        <RotatingImage src={rotatingImageSrc} alt="Rotating" />
      </Box>
      <Box
        className="quoteText"
        display="flex"
        flexDirection="column"
        alignItems="center"
        position={"relative"}
        zIndex={"2"}
        pt={10}
        pb={10}
        width={"95%"}
        maxWidth={"1200px"}
        mx={"auto"}
      >
        {quoteText.map((quote, quoteIndex) => {
          // Define the text alignment depending on the index
          let justifyContent;
          if (quoteIndex === 0) justifyContent = "flex-end";
          else if (quoteIndex === 1) justifyContent = "flex-end";
          else if (quoteIndex === 2) justifyContent = "center";

          let textAlign;
          if (quoteIndex === 0 || quoteIndex === 1) textAlign = "right";
          else if (quoteIndex === 2) textAlign = "left";

          let maxWidth;
          if (quoteIndex === 0) maxWidth = "40%";
          else if (quoteIndex === 1) maxWidth = "70%";
          else if (quoteIndex === 2) maxWidth = "80%";

          return (
            <Flex
              direction="row"
              alignItems="center"
              justifyContent={justifyContent}
              width={"100%"}
              key={quoteIndex}
              
            >
              {/* Add the opening quote icon to the first quote */}
              {quoteIndex === 0 && (
                <Icon
                  as={FaQuoteLeft}
                  boxSize="4em"
                  alignSelf="flex-start" // Align to the top of the Flex
                  color={"primary.400"}
                />
              )}

              <Box flex={1} mx={4} maxWidth={maxWidth} mb={6}>
                <Text textAlign={textAlign}>
                  {quote.parts.map((part, partIndex) => (
                    <Box
                      as="span"
                      fontWeight={part.highlighted ? "bold" : "normal"}
                      color={part.highlighted ? "primary.400" : "gray.500"}
                      fontSize={{
                        base: part.highlighted ? "17px" : "16px",
                        md: part.highlighted ? "2.3vw" : "2vw",
                        lg: part.highlighted ? "2em" : "1.8em",
                      }}
                      key={partIndex}
                    >
                      {part.text}
                    </Box>
                  ))}
                </Text>
              </Box>

              {/* Add the closing quote icon to the last quote */}
              {quoteIndex === quoteText.length - 1 && (
                <Icon
                  as={FaQuoteRight}
                  boxSize="4em"
                  alignSelf="flex-end" // Align to the bottom of the Flex
                  color={"primary.400"}
                />
              )}
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default Hero;
