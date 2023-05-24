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

const Contacto = () => {
  const gradient = useColorModeValue(
    "linear(to-b, primary.400, white)",
    "linear(to-b, primary.400, white)"
  );
  const [isLandscape] = useMediaQuery("(orientation: landscape)");
  const [mathProblem, setMathProblem] = useState(generateMathProblem());
  const [userAnswer, setUserAnswer] = useState("");
  const [formError, setFormError] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  function generateMathProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operator = Math.random() < 0.5 ? "+" : "-";
    const solution = operator === "+" ? num1 + num2 : num1 - num2;
    return `${num1} ${operator} ${num2} = `;
  }

  const evaluateMathProblem = (mathProblem) => {
    const parts = mathProblem.split(" ");
    const num1 = parseInt(parts[0]);
    const operator = parts[1];
    const num2 = parseInt(parts[2]);

    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else {
      return NaN;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const expectedAnswer = evaluateMathProblem(mathProblem);
    if (parseInt(userAnswer) !== expectedAnswer) {
      setFormError("La respuesta no es correcta.");
      return;
    }

    setShowMessage(true);
    setMessage(
      "Gracias por contactarnos. Nos comunicaremos con usted lo antes posible."
    );

    setMathProblem(generateMathProblem());
    setUserAnswer("");
    setFormError("");
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
                <Input placeholder="Nombre" bg={"white"} />
                <Input placeholder="Apellido" bg={"white"} />
                <Input placeholder="Teléfono" bg={"white"} />
                <Input placeholder="Empresa" bg={"white"} />
              </Grid>
              <Input placeholder="Email" my={3} bg={"white"} />
              <Textarea
                placeholder="Mensaje"
                height="150px"
                mb={3}
                bg={"white"}
                resize={"none"}
              />

              <Grid
                templateColumns="1fr 1fr 1fr 1fr"
                gap={2}
                alignItems="center"
                mb={3}
              >
                <Text color="black" fontWeight="bold">
                  {mathProblem}
                </Text>
                <Input
                  type="number"
                  placeholder="Respuesta"
                  bg="white"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
                <Button
                  bg={"primary.400"}
                  color={"white"}
                  onClick={handleSubmit}
                  isDisabled={formError}
                >
                  Enviar
                </Button>
              </Grid>
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
            allowfullscreen=""
            loading="lazy"
          ></Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contacto;
