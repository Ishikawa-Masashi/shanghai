import * as React from 'react';

import { Center, CenterProps, Heading } from '@chakra-ui/react';
import { SVGText } from './SVGText';

export const Header = (props: CenterProps) => {
  const { ...rest } = props;

  const strokeWidth = 2,
    strokecolor = '#000';
  return (
    <Center alignItems="end" padding="6px" {...rest}>
      {/* <Heading
        fontSize="5vmin"
        color="white"
        userSelect="none"
        // fontFamily="PixelMplus12"
        // style={{ textStroke: '1px #000' }}
        textShadow={`${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, ${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}`}
      >
        Mahjongg Solitaire
      </Heading> */}
      <SVGText>Mahjongg Solitaire</SVGText>
    </Center>
  );
};
