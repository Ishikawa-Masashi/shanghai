import * as React from 'react';

import { Center, CenterProps, Heading } from '@chakra-ui/react';

export const Header = (props: CenterProps) => {
  const { ...rest } = props;
  return (
    <Center alignItems="end" padding="6px" {...rest}>
      <Heading fontSize="5vmin" color="white" userSelect="none">
        Mahjongg Solitaire
      </Heading>
    </Center>
  );
};
