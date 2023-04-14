import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, HStack } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ScreenFrame } from '../components/Elements';

export const Layout = () => {
  return (
    <ScreenFrame>
      <Box h="full" w="full">
        <Header h="10%" />
        <HStack h="80%">
          <Box width="10%" />
          <Outlet />
          <Box width="10%" />
        </HStack>
        <Footer
          h="10%"
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          alignItems="flex-end"
        />
      </Box>
    </ScreenFrame>
  );
};
