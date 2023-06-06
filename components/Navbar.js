'use client'

import React from 'react';
import {
  Box,
  Flex,
  Spacer,
  Link as ChakraLink,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { useWindowScroll } from "react-use";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Navbar = () => {
  const { y: scrollY } = useWindowScroll();
  const { isOpen, onToggle } = useDisclosure();

  const showNavbar = scrollY > 100;
  const isMobileNav = useBreakpointValue({ base: true, md: false });
  const transitionDuration = "0.3s";

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500, // Adjust the duration as desired
    });
  };

  return (
    <>
      <Spacer display={showNavbar ? 'block' : 'none'} height="80px" />

      <MotionBox
        as="header"
        position={showNavbar ? 'fixed' : 'relative'}
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        bg="white"
        px={4}
        py={2}
        style={{ transition: `padding ${transitionDuration}` }}
        w="95%"
        maxW='1200px'
        mx="auto"
        boxShadow="md"
        borderBottomLeftRadius="md"
        borderBottomRightRadius="md"
        transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}  // Adjust these values as needed
        >
        <Flex alignItems="flex-end">
          {showNavbar ? null : (
            <Image
              src="/images/dali-logo.png"
              alt="Dali Logo"
              maxH="5em"
              cursor="pointer"
              onClick={handleScrollToTop} // Scroll to top when logo is clicked
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
              <ChakraLink
                as={ScrollLink}
                to="productos"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
              >
                PRODUCTOS
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="servicios"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
              >
                SERVICIOS
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="sustentabilidad"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
              >
                SUSTENTABILIDAD
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="contacto"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
              >
                CONTACTO
              </ChakraLink>
            </>
          )}
        </Flex>
        {isMobileNav && (
          <Collapse in={isOpen} animateOpacity>
            <Flex direction="column" mt={4}>
              <ChakraLink
                as={ScrollLink}
                to="productos"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
                onClick={onToggle} // Close the mobile menu after clicking a link
              >
                PRODUCTOS
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="servicios"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
                onClick={onToggle} // Close the mobile menu after clicking a link
              >
                SERVICIOS
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="sustentabilidad"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
                onClick={onToggle} // Close the mobile menu after clicking a link
              >
                SUSTENTABILIDAD
              </ChakraLink>
              <ChakraLink
                as={ScrollLink}
                to="contacto"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100} // Adjust the offset as needed
                activeClass="active"
                mx={2}
                fontWeight={700}
                color={"black"}
                onClick={onToggle} // Close the mobile menu after clicking a link
              >
                CONTACTO
              </ChakraLink>
            </Flex>
          </Collapse>
        )}
      </MotionBox>
    </>
  );
};

export default Navbar;
