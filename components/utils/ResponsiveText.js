import { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import FontSizeContext from './FontSizeContext';

function ResponsiveText({ children, sizeFactor = 1, ...props }) {
  const baseTextSize = useContext(FontSizeContext);
  const textSize = baseTextSize ? baseTextSize * sizeFactor : null; // Aplica el multiplicador al tamaño base de la fuente

  return (
    <Text fontSize={textSize ? `${textSize}px` : '16px'} {...props}>  {/* Un valor predeterminado para cuando el tamaño de la fuente aún no se ha calculado */}
      {children}
    </Text>
  );
}

export default ResponsiveText;