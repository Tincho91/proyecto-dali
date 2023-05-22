'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  Text,
  Heading,
  VStack,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isLandscape] = useMediaQuery("(orientation: landscape)");

  const settings = {
    arrows: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "37%",
    beforeChange: (current, next) => setCurrent(next),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          centerPadding: "32%",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          centerPadding: "33%",
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          centerPadding: "35%",
        },
      },
    ],
  };

  return (
    <Flex direction="column">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Flex
            key={index}
            className={index === current ? "slide activeSlide" : "slide"}
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={image.src}
              alt={image.alt}
              boxSize={{
                base: isLandscape ? "90px" : "180px",
                sm: isLandscape ? "180px" : "360px",
                md: isLandscape ? "150px" : "360px",
                lg: isLandscape ? "125px" : "360px",
                xl: isLandscape ? "175px" : "570px",
              }}
              minW={{ base: "200px", md: "300px", lg: "400px" }} // Added minimum width here
              minH={{ base: "200px", md: "300px", lg: "400px" }} // Added minimum height here
              objectFit="contain"
              mx={"auto"}
            />
          </Flex>
        ))}
      </Slider>

      <Flex
        className="slick-caption"
        width={"90%"}
        maxW={"1200px"}
        mx={"auto"}
        justifyContent="center"
      >
        <VStack
          align="center"
          justifyContent="center"
          width="100%"
          textAlign="center"
        >
          <Heading
            fontSize={{
              base: isLandscape ? "20px" : "6.5vw",
              sm: isLandscape ? "2vh" : "6vw",
              md: isLandscape ? "2vh" : "4vw",
              lg: isLandscape ? "30px" : "60px",
            }}
            color={"white"}
            pt={{ base: "0", sm: "10px", md: "25px" }}
          >
            {images[current]?.title}
          </Heading>
          <Text
            color={"white"}
            fontSize={{
              base: isLandscape ? "sm" : "md",
              md: isLandscape ? "md" : "lg",
            }}
            display={{ base: "none", sm: "block" }}
          >
            {images[current]?.text}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Carousel;