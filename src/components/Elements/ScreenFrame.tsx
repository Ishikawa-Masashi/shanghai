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
      width="100%"
      height="100%"
      overflow="hidden"
      justify="center"
      align="center"
      bg="black"
    >
      <Box
        width="100%"
        maxHeight="100%"
        position="relative"
        style={{ aspectRatio: '16 / 9' }}
      >
        {children}
      </Box>
    </Flex>
  );
};
