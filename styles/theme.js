import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'Nunito',
    body: 'Nunito',
  },
  colors: {
    primary: {
      400: '#489F82',
      450: "rgba(72, 159, 130, 0.5)",
    },
    gray: {
      100: '#858585'
    },
  },
});

export default theme;