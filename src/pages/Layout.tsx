import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Grid, GridItem } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Left } from '../components/Left';
import { Right } from '../components/Right';
import { Footer } from '../components/Footer';

export const Layout = () => {
  return (
    <Grid
      templateAreas={`
        "header header header"
        "left main right"
        "footer footer footer"
      `}
      gridTemplateRows={'10% 1fr 10%'}
      gridTemplateColumns={'10% 1fr 10%'}
      h="100vh"
      gap="1"
      fontWeight="bold"
      backgroundColor="#00b32a"
      backgroundImage="url(/classy-fabric.png)"
    >
      <GridItem pl="2" area={'header'}>
        <Header />
      </GridItem>
      <GridItem pl="2" area={'left'}>
        <Left />
      </GridItem>
      <GridItem pl="2" area={'main'}>
        <Outlet />
      </GridItem>
      <GridItem pl="2" area={'right'}>
        <Right />
      </GridItem>
      <GridItem pl="2" area={'footer'}>
        <Footer />
      </GridItem>
    </Grid>
  );
};
