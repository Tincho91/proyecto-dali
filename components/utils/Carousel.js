'use client'
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import {
  Image,
  Text,
  VStack,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isLandscape] = useMediaQuery("(orientation: landscape)");
  const sliderRef = useRef(null);

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
          centerPadding: "20%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30%",
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "32%",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          centerPadding: "33%",
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 1,
          centerPadding: "35%",
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const handleSlideClick = (index) => {
    setCurrent(index); // Update the current slide index
    sliderRef.current.slickGoTo(index); // Move the slider to the clicked slide
  };

  return (
    <Flex direction="column">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <Flex
            key={index}
            className={index === current ? "slide activeSlide" : "slide"}
            justifyContent="center"
            alignItems="center"
            onClick={() => handleSlideClick(index)} // Add onClick handler
          >
            <Image
              src={image.src}
              alt={image.alt}
              boxSize={{
                // ...existing boxSize values...
              }}
              w={{ base: "160px", md: "220px", lg: "330px" }}
              h={{ base: "160px", md: "220px", lg: "330px" }}
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
          <Text
            fontSize={{base: "6.5vw", md: "4.5vw", lg: "40px"}}
            fontWeight={"700"}
            color={"white"}
            pt={{ base: "20px", sm: "15px", md: "25px" }}
          >
            {images[current]?.title}
          </Text>
          <Text
            color={"white"}
            fontSize={{base:"15px", md: "2vh", lg: "20px"}}
          >
            {images[current]?.text}
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Carousel;