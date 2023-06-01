import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Box } from "@chakra-ui/react";

const RotatingImage = ({ src, alt }) => {
  const rotation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    loop: true,
    config: { duration: 50000 }, // This controls the speed of the rotation
  });

  return (
    <Box
      as={animated.div}
      w="80%"
      h="80%"
      overflow="hidden"
      style={{ ...rotation, backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    />
  );
};

export default RotatingImage;
