import * as React from 'react';

import { Grid } from '@chakra-ui/react';

type Props = React.PropsWithChildren<{ width?: number; height?: number }>;

export const PixelGrid = (props: Props) => {
  const { children, width = 320, height = 180 } = props;

  return (
    <Grid
      w="full"
      h="full"
      gridTemplateRows={`repeat(${height}, ${100 / height}% )`}
      gridTemplateColumns={`repeat(${width}, ${100 / width}%)`}
      backgroundColor="rgb(0,107,119)"
    >
      {children}
    </Grid>
  );
};
