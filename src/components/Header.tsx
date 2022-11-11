import * as React from 'react';

import { Center, Heading } from '@chakra-ui/react';

export const Header = () => {
  //   const location = useLocation();
  //   console.log(location);
  return (
    <Center alignItems="end" h="full">
      <Heading fontSize="5vmin" color="white">
        Mahjongg Solitaire
      </Heading>
    </Center>
  );
};
