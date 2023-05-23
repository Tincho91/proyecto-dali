'use client'

import {
  Box,
  Flex,
  Spacer,
  Link,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const { y: scrollY } = useWindowScroll();
  const { isOpen, onToggle } = useDisclosure();

  const showNavbar = scrollY > 300;
  const isMobileNav = useBreakpointValue({ base: true, md: false });
  const transitionDuration = "0.3s";

  return (
    <Box
      as="header"
      position={showNavbar ? 'fixed' : 'relative'}
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      bg="white"
      px={4}
      py={2}
      transition={`padding ${transitionDuration}`}
      w="95%"
      maxW='1200px'
      mx="auto"
      boxShadow="md"
      borderBottomLeftRadius="md"
      borderBottomRightRadius="md"
    >
      <Flex alignItems="flex-end">
        {showNavbar ? null : (
          <Image
            src="/images/dali-logo.png"
            alt="Dali Logo"
            maxH="6em"
          />
        )}
        <Spacer />
        {isMobileNav ? (
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="outline"
            aria-label="Navigation Menu"
            color={"black"}
          />
        ) : (
          <>
            <Link href="#" mx={2} fontWeight={700} color={"black"}>
              PRODUCTOS
            </Link>
            <Link href="#" mx={2} fontWeight={700} color={"black"}>
              SERVICIOS
            </Link>
            <Link href="#" mx={2} fontWeight={700} color={"black"}>
              SUSTENTABILIDAD
            </Link>
            <Link href="#" mx={2} fontWeight={700} color={"black"}>
              CONTACTO
            </Link>
          </>
        )}
      </Flex>
      {isMobileNav && (
        <Collapse in={isOpen} animateOpacity>
          <Flex direction="column" mt={4}>
            <Link href="#" py={2} fontWeight={700} color={"black"}>
              PRODUCTOS
            </Link>
            <Link href="#" py={2} fontWeight={700} color={"black"}>
              SERVICIOS
            </Link>
            <Link href="#" py={2} fontWeight={700} color={"black"}>
              SUSTENTABILIDAD
            </Link>
            <Link href="#" py={2} fontWeight={700} color={"black"}>
              CONTACTO
            </Link>
          </Flex>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;