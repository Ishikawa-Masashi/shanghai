import * as React from 'react';

import { FlexProps, Flex } from '@chakra-ui/react';
import { ScaleTypographyWithScreenSize } from './ScaleTypographyWithScreenSize';

export const Footer = (props: FlexProps) => {
  const { ...rest } = props;
  return (
    <Flex
      // backgroundColor="hsla(0deg, 0%, 0%, 0.3)"
      // boxShadow="0px 0px 20px 20px rgb(0 0 0 / 30%)"
      // userSelect="none"
      // position="absolute"
      // bottom={0}
      {...rest}
    >
      <ScaleTypographyWithScreenSize>
        Copyright © 2022 Ishikawa Masashi. All Rights Reserved.
      </ScaleTypographyWithScreenSize>
    </Flex>
  );
};
