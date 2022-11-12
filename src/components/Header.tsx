import * as React from 'react';

import { Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Center alignItems="end" h="full" padding="6px">
      <Heading fontSize="5vmin" color="white">
        Mahjongg Solitaire
      </Heading>
    </Center>
  );
};
