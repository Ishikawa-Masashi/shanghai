import * as React from 'react';
import { Box, FlexProps, Text, TextProps, Flex } from '@chakra-ui/react';

// type Props = { scalingFactor?: number } & FlexProps;
type Props = FlexProps;

export const ScaleTypographyWithScreenSize = (props: Props) => {
  // const { children, scalingFactor = 1 } = props;
  const { children } = props;

  return (
    <Flex
      style={{ containerType: 'inline-size' }}
      w="full"
      justify="center"
      {...props}
    >
      <p style={{ fontSize: '2cqw' }}>{children}</p>
    </Flex>
  );

  return (
    <Text
      color="white"
      whiteSpace="nowrap"
      // padding="6px"
      // fontSize="calc(.5 * (1.5vh + 1.1vw))"
      // fontSize="calc(0.9 * (1.5vh + 1.1vw))"
      // fontSize={`calc(${scalingFactor} * (1.5vh + 1.1vw))`}
      // fontSize="calc(.5em + 1vw)"
      // fontSize="calc(.5rem + 1vw)"
    >
      {children}
    </Text>
  );
};
