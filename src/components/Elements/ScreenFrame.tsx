import * as React from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useResizeObserver } from '@ishikawa_masashi/react-hooks';
import { setPixelRatio, WIDTH } from '../../states/globalState';
import { AspectRatio } from '../AspectRatio';

type Props = {
  /*
   *
   */
} & BoxProps;

export const ScreenFrame = (props: Props) => {
  const { children } = props;

  const ref = React.useRef<HTMLDivElement>(null);
  const [width, height] = useResizeObserver(ref);

  React.useEffect(() => {
    console.log(width / WIDTH);
    setPixelRatio(width / WIDTH);
  }, [width, height]);

  return (
    <Box
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      backgroundColor={'#00b32a'}
      backgroundImage={'url(/classy-fabric.png)'}
    >
      <AspectRatio ratio={16 / 9}>{children}</AspectRatio>
    </Box>
  );
};
