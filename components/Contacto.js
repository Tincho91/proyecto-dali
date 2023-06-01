import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useMediaQuery,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import emailJs from '@emailjs/browser';

const Contacto = () => {
  const gradient = useColorModeValue(
    "linear(to-b, primary.400, white)",
    "linear(to-b, primary.400, white)"
  );
  const [isLandscape] = useMediaQuery("(orientation: landscape)");
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    empresa: "",
    email: "",
    mensaje: "",
  });
  const [formError, setFormError] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!formData.nombre) {
      setFormError("Ingrese su nombre.");
      return;
    }

    if (!formData.apellido) {
      setFormError("Ingrese su apellido.");
      return;
    }

    if (!formData.telefono || isNaN(formData.telefono)) {
      setFormError("Ingrese un número de teléfono válido.");
      return;
    }

    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formData.email)) {
      setFormError("Ingrese un email válido.");
      return;
    }

    if (!formData.mensaje) {
      setFormError("Ingrese un mensaje.");
      return;
    }

    // Form submission logic
    setIsSubmitting(true);
    setFormError("");

    emailJs.send(
      'service_8p1n75h', // Use your own EmailJS service ID here
      'template_b71qtke', // Use your own EmailJS template ID here
      {
        from_name: formData.nombre + " " + formData.apellido,
        from_email: formData.email,
        to_email: 'dalitermoplasticos@gmail.com', // Use the email address you want to send to
        message: formData.mensaje,
        empresa: formData.empresa,
        telefono: formData.telefono,
        email: formData.email,
        // Add any other template parameters you need
      },
      'CU5Pdv5UOxUXGBMJP' // Use your own EmailJS user ID here
    )
      .then(() => {
        setIsSubmitting(false);
        setShowMessage(true);
        setMessage(
          "Gracias por contactarnos. Nos comunicaremos con usted lo antes posible."
        );
        setFormData({
          nombre: "",
          apellido: "",
          telefono: "",
          empresa: "",
          email: "",
          mensaje: "",
        });
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      }, (error) => {
        setIsSubmitting(false);
        setFormError("Algo salió mal.");
        console.log(error);
      });
  };

  return (
    <Box
      id="contacto"
      bgGradient={gradient}
      p={8}
      transform={isLandscape ? "translateY(-12vh)" : "translateY(-10vh)"}
    >
      <Box w={"100%"} maxW={"1200px"} mx={"auto"}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
          <Box>
            <Text
              fontSize={{ base: "30px", md: "3.2vw", lg: "50px" }}
              mb={5}
              color={"white"}
              fontWeight={"700"}
              letterSpacing={"8px"}
            >
              CONTACTO
            </Text>
            <Box>
              <Grid templateColumns="repeat(2, 1fr)" gap={3}>
                <Input
                  placeholder="Nombre"
                  bg={"white"}
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Apellido"
                  bg={"white"}
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Teléfono"
                  bg={"white"}
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
                <Input
                  placeholder="Empresa"
                  bg={"white"}
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                />
              </Grid>
              <Input
                placeholder="Email"
                my={3}
                bg={"white"}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <Textarea
                placeholder="Mensaje"
                height="150px"
                mb={3}
                bg={"white"}
                resize={"none"}
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
              />

              <Button
                bg={"primary.400"}
                color={"white"}
                onClick={handleSubmit}
              >
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>

              {formError && (
                <Alert status="error" mb={3}>
                  <AlertIcon />
                  {formError}
                </Alert>
              )}
              {showMessage && (
                <Alert status="success" mb={3}>
                  <AlertIcon />
                  {message}
                </Alert>
              )}
            </Box>
          </Box>
          <Box
            as="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.9839668239215!2d-57.610248424632005!3d-38.00083444475174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584d8d05be46481%3A0x3292074ba66cdc06!2sDALI%20TERMOPLASTICOS!5e0!3m2!1ses!2sar!4v1684618187433!5m2!1ses!2sar"
            minH={"350px"}
            height={"100%"}
            width={"100%"}
            shadow={"lg"}
            borderRadius={"lg"}
            justifySelf={{ lg: "end" }}
            allowFullScreen=""
            loading="lazy"
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contacto;
