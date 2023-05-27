import * as React from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useResizeObserver } from '@ishikawa_masashi/react-hooks';
import { setPixelRatio, WIDTH } from '../../states/globalState';

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
      // backgroundImage={'url(/classy-fabric.png)'}
    >
      <Flex
        height="100%"
        justify="center"
        align="center"
        backgroundColor="#00000042"
        boxSizing="border-box"
      >
        <Box
          maxWidth="100vw"
          maxHeight="calc(9 / 16 * 100vw)"
          width="calc(16 / 9 * 100vh)"
          // height="100vh"
          height="100%"
          backgroundColor={'#00b32a'}
          // backgroundImage={'url(/classy-fabric.png)'}

          backgroundImage="/images/6555578_38130.jpg"
          backgroundSize="contain"
          ref={ref}
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};
