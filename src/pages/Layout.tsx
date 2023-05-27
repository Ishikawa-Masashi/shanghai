import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Box, GridItem, HStack } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// import { ScreenFrame } from '../components/Elements';
import { PixelGrid } from '../components/PixelGrid';
import { ScreenFrame } from '../components/Elements';

export const Layout = () => {
  return (
    <ScreenFrame>
      {/* <Box
        h="full"
        w="full"
        // backgroundColor="rgb(0,76,82)"
      > */}
      <Header />
      <Outlet />
      {/* </Box> */}
      {/* <Box h="full" w="full">
        <Header />
        <PixelGrid>
          <GridItem
            rowStart={1}
            rowEnd={14}
            colStart={1}
            colEnd={321}
            backgroundColor="rgb(0,76,82)"
          >
            <Header />
          </GridItem>

          <GridItem rowStart={18} rowEnd={162} colStart={1} colEnd={320}>
            <Outlet />
          </GridItem>
        </PixelGrid>
      </Box> */}
    </ScreenFrame>
  );
};
