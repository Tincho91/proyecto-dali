import { Box, Flex, Text, Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = ({ footerRef }) => {
  const flexDirection = useBreakpointValue({ base: "column", sm: "row" });

  return (
    <Box p={4} width={"100%"} maxW={"1200px"} mx={"auto"} mt={"-5vw"} ref={footerRef}>
      <Flex justifyContent="space-between" alignItems="center" flexDirection={flexDirection}>
        <Flex mb={{base: "20px", sm: "0px"}}>
          <Link href="https://www.instagram.com/yourusername" isExternal>
            <Icon as={FaInstagram} color={"primary.400"} boxSize={10} />
          </Link>
          <Link href="https://es-la.facebook.com/people/Dali-Termoplasticos/100063528069650/" ml={4} isExternal>
            <Icon as={FaFacebookSquare} color={"primary.400"} boxSize={10} />
          </Link>
        </Flex>
        <Flex flexDirection="column" textAlign="center">
          <Text color={"primary.400"} fontWeight={"700"} fontSize={{base: "15px", md: "20px"}}>223 5999980 (Compras y Ventas)</Text>
          <Text color={"primary.400"} fontWeight={"700"} fontSize={{base: "15px", md: "20px"}}>223 6005501 (Administración)</Text>
          <Text color={"primary.400"} fontWeight={"700"} fontSize={{base: "15px", md: "20px"}}></Text>dalitermoplasticos@gmail.com</Text>
        </Flex>
        <Box display={{base: "none", sm: "block"}} /> {/* This is a placeholder to keep the balance in the layout */}
      </Flex>
    </Box>
  );
};

export default Footer;