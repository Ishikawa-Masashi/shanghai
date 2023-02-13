import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Grid, GridItem, HStack, VStack } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Left } from '../components/Left';
import { Right } from '../components/Right';
import { Footer } from '../components/Footer';
import { ScreenFrame } from '../components/Elements';

export const Layout = () => {
  return (
    <ScreenFrame>
      {/* <Box w="full" h="full"> */}
      <Header h="10%" />
      <HStack h="80%">
        <Left />
        <Outlet />
        <Right />
      </HStack>
      <Footer />
      {/* </Box> */}
    </ScreenFrame>
  );
};
