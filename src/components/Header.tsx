import * as React from 'react';

import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  console.log(location);
  return (
    // <Flex padding="6px" height="100%" width="100%" justify="space-between">
    <Center alignItems="end">
      <Heading fontSize="5vmin" color="white">
        Mahjongg Solitaire
      </Heading>
    </Center>
    // </Flex>
  );
};
