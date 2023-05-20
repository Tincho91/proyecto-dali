import { Box, Link, useColorModeValue } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <Box
      as="a"
      href="https://wa.me/1234567890" // Reemplace con su enlace de WhatsApp real
      target="_blank"
      rel="noopener noreferrer"
      bg="#25D366"
      color="white"
      borderRadius="full"
      p={2}
      position="fixed"
      bottom={8}
      right={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
      boxShadow="lg"
      zIndex={"99999999"}
    >
      <FaWhatsapp size={24} />
    </Box>
  );
};

export default Whatsapp;
