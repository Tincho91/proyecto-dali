import { Box, Image } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

const RotatingImage = ({ src, alt, ...rest }) => (
    <Box display="flex" justifyContent="center" animation={`${spin} 20s linear infinite`}>
        <Image display="block" src={src} alt={alt} {...rest} maxH={'60vw'}/>
    </Box>
);

export default RotatingImage;