import * as React from 'react';
import { Box, FlexProps, Text, TextProps, Flex } from '@chakra-ui/react';

type Props = { scalingfactor?: number } & FlexProps;
// type Props = FlexProps;

export const ScaleTypographyWithScreenSize = (props: Props) => {
  const { children, scalingfactor = 1 } = props;
  // const { children } = props;

  // return (
  //   <Flex
  //     style={{ containerType: 'inline-size' }}
  //     w="full"
  //     justify="center"
  //     userSelect="none"
  //     whiteSpace="nowrap"
  //     {...props}
  //   >
  //     {/* <p style={{ fontSize: '2cqw' }}>{children}</p> */}
  //     <p style={{ fontSize: `${2 * scalingfactor}qw`, userSelect: 'none' }}>
  //       {children}
  //     </p>
  //   </Flex>
  // );

  return (
    <Flex
      w="full"
      justify="center"
      userSelect="none"
      whiteSpace="nowrap"
      {...props}
    >
      <Text
        color="white"
        whiteSpace="nowrap"
        // fontSize="calc(.5 * (1.5vh + 1.1vw))"
        // fontSize="calc(0.9 * (1.5vh + 1.1vw))"
        // fontSize={`calc(${scalingFactor} * (1.5vh + 1.1vw))`}
        fontSize="calc(.5em + 1vw)"
        // fontSize="calc(.5rem + 1vw)"
      >
        {children}
      </Text>
    </Flex>
  );
};
