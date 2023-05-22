import React from "react";
import Slider from "react-slick";
import {
  Box,
  Image,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { useSpring } from "react-spring";
import RotatingImage from "./utils/RotatingImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const carouselItems = [
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
      fontSize: { base: "4vw", md: "3vw", lg: "2.5vw", xl: "35px" },
    },
    {
      src: "/images/hero2.png",
      textParts: [
        { text: "Nuestros PROCESOS", highlighted: true },
        { text: " mejoran la competitividad y la ", highlighted: false },
        { text: "EFICIENCIA", highlighted: true },
      ],
      position: {
        base: { top: "40%", right: "5%", maxWidth: "50%" },
        md: { top: "20%", left: "5%", right: "20%", maxWidth: "35%" },
        lg: { top: "20%", left: "5%", right: "20%", maxWidth: "35%" },
      },
      fontSize: { base: "4vw", md: "3vw", lg: "2.5vw", xl: "35px" },
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
    autoplaySpeed: 500000,
    pauseOnHover: false,
    fade: true,
  };

  const sliderHeight = useBreakpointValue({ base: "40vh", md: "auto" });

  const bounce = useSpring({
    from: { transform: "translate3d(0,0px,0)" },
    to: { transform: "translate3d(0,15px,0)" },
    loop: { reverse: true },
  });

  return (
    <Box>
      <Box
        mt={7}
        width={"95%"}
        maxWidth={"1200px"}
        mx={"auto"}
        zIndex={1}
        position="relative"
      >
        <Slider as="Box" {...settings} adaptiveHeight>
          {carouselItems.map((item, index) => {
            const position = useBreakpointValue(item.position);
            const fontSize = useBreakpointValue(item.fontSize);

            return (
              <Box position="relative" h={sliderHeight} key={index}>
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
    </Box>
  );
};

export default Hero;