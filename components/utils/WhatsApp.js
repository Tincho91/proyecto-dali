import { Box, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = ({ buttonPosition }) => {
  return (
    <Box
      as="a"
      href="https://wa.me/2235999980"
      target="_blank"
      rel="noopener noreferrer"
      bg="#25D366"
      color="white"
      borderRadius="full"
      p={2}
      position="fixed"
      bottom={buttonPosition} // Usa el estado aquí
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
