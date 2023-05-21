import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Box p={4} width={"100%"} maxW={"1200px"} mx={"auto"} mt={"-5vw"}>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex>
          <Link href="https://www.instagram.com/yourusername" isExternal>
            <Icon as={FaInstagram} color={"primary.400"} boxSize={10} />
          </Link>
          <Link href="https://es-la.facebook.com/people/Dali-Termoplasticos/100063528069650/" ml={4} isExternal>
            <Icon as={FaFacebookSquare} color={"primary.400"} boxSize={10} />
          </Link>
        </Flex>
        <Flex flexDirection="column" textAlign="center">
          <Text color={"primary.400"} fontWeight={"700"} fontSize={{ base: "14px", md: "21px", lg: "23px"}}>223 5999980 (Compras y Ventas)</Text>
          <Text color={"primary.400"} fontWeight={"700"} fontSize={{ base: "14px", md: "21px", lg: "23px"}}>223 6005501 (Administración)</Text>
          <Text color={"primary.400"} fontWeight={"700"} fontSize={{ base: "14px", md: "21px", lg: "23px"}}>dalitermoplasticos@gmail.com</Text>
        </Flex>
        <Box /> {/* This is a placeholder to keep the balance in the layout */}
      </Flex>
    </Box>
  );
};

export default Footer;