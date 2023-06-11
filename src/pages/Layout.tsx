import * as React from 'react';
import { Outlet, unstable_HistoryRouter, useLocation } from 'react-router-dom';

import { Box, Flex, GridItem, HStack } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { ScreenFrame } from '../components/Elements';
import { PixelGrid } from '../components/PixelGrid';
import { ScreenFrame } from '../components/Elements';
import { AspectRatio } from '../components/AspectRatio';

export const Layout = () => {
  const location = useLocation();
  return (
    <ScreenFrame>
      <Header />
      <Outlet />
    </ScreenFrame>
  );
};
