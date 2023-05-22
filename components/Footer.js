import { Box, Flex, Icon, Link, useBreakpointValue } from "@chakra-ui/react";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import ResponsiveText from "./utils/ResponsiveText";

const Footer = () => {
  const flexDirection = useBreakpointValue({ base: "column", sm: "row" });

  return (
    <Box p={4} width={"100%"} maxW={"1200px"} mx={"auto"} mt={"-5vw"}>
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
          <ResponsiveText color={"primary.400"} fontWeight={"700"} sizeFactor={1.5}>223 5999980 (Compras y Ventas)</ResponsiveText>
          <ResponsiveText color={"primary.400"} fontWeight={"700"} sizeFactor={1.5}>223 6005501 (Administración)</ResponsiveText>
          <ResponsiveText color={"primary.400"} fontWeight={"700"} sizeFactor={1.5}>dalitermoplasticos@gmail.com</ResponsiveText>
        </Flex>
        <Box display={{base: "none", sm: "block"}} /> {/* This is a placeholder to keep the balance in the layout */}
      </Flex>
    </Box>
  );
};

export default Footer;