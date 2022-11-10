import * as React from 'react';

import { HeadingProps, Text } from '@chakra-ui/react';

export const Heading1 = (props: HeadingProps) => {
  const { children } = props;
  return (
    <Text
      display="flex"
      justifyContent="center"
      fontSize="5vmin"
      color="white"
      stroke="black"
      textShadow="0px 3px 0px #000000"
      userSelect="none"
      fontFamily="UD デジタル 教科書体 N-R"
      cursor="pointer"
      style={{ marginRight: '1rem' }}
    >
      {children}
    </Text>
  );
};
