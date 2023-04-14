import * as React from 'react';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

type Props = {
  /*
   *
   */
} & BoxProps;

export const ScreenFrame = (props: Props) => {
  const { children } = props;

  return (
    <Flex
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"
      justify="center"
      align="center"
      backgroundColor={'#00b32a'}
      backgroundImage={'url(/classy-fabric.png)'}
    >
      <Flex
        width="100%"
        height="100%"
        justify="center"
        align="center"
        backgroundColor="#00000042"
      >
        <Box
          width="100%"
          maxHeight="100%"
          position="relative"
          style={{ aspectRatio: '16 / 9' }}
          backgroundColor={'#00b32a'}
          backgroundImage={'url(/classy-fabric.png)'}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
