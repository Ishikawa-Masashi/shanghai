import * as React from 'react';

import { GridItem } from '@chakra-ui/react';

type Props = React.PropsWithChildren<{
  x: number;
  y: number;
  width?: number;
  height?: number;
}>;

export const PixelItem = (props: Props) => {
  const { children, x, y, width = 1, height = 1 } = props;
  return (
    <GridItem rowStart={y} rowEnd={y + height} colStart={x} colEnd={x + width}>
      {children}
    </GridItem>
  );
};
