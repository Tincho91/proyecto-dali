'use client'
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  useBreakpointValue,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useSpring, animated } from "react-spring";
import RotatingImage from "./utils/RotatingImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const carouselItems = [
    {
      src: "/images/hero1.png",
      textParts: [
        { text: "Apostamos a la", highlighted: false },
        { text: "ECONOMIA CIRCULAR", highlighted: true },
        { text: "como modelo productivo", highlighted: false },
      ],
      position: { top: "20%", left: "10%", right: "10%" },
    },
    {
      src: "/images/hero2.png",
      textParts: [
        { text: "Nuestros PROCESOS", highlighted: true },
        { text: "mejoran la competitividad y la", highlighted: false },
        { text: "EFICIENCIA", highlighted: true },
      ],
      position: { top: "40%", left: "5%" },
    },
  ];

  const rotatingImageSrc = "/images/ReCircle.png";

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
  };

  const sliderHeight = useBreakpointValue({ base: "55vh", md: "auto" });

  const bounce = useSpring({
    from: { transform: "translate3d(0,0px,0)" },
    to: { transform: "translate3d(0,15px,0)" },
    loop: { reverse: true },
  });

  return (
    <>
      <Box
        mt={7}
        width={"95%"}
        maxWidth={"1200px"}
        mx={"auto"}
        zIndex={1}
        position="relative"
      >
        <Slider as="Box" {...settings} adaptiveHeight>
          {carouselItems.map((item, index) => (
            <Box position="relative" h={sliderHeight} key={index}>
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                boxSize="full"
                objectFit="cover"
                rounded={"xl"}
              />
              <Box position="absolute" zIndex={2} {...item.position}>
                <Text fontSize="xl" color="white">
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
          ))}
        </Slider>
      </Box>
      <Box
        position={"absolute"}
        transform={"translateY(-60%)"}
        right={0}
        zIndex={0}
        overflow={"visible"}
      >
        <RotatingImage src={rotatingImageSrc} alt="Rotating" />
      </Box>
      <animated.div style={bounce}>
        <IconButton
          aria-label="Scroll down"
          icon={<ArrowDownIcon />}
          isRound={true}
          size="lg"
          left="50%"
          transform="translateX(-50%)"
          mt={2}
          color={" black "}
          bg={"primary.450"}
        />
      </animated.div>
    </>
  );
};

export default Hero;
