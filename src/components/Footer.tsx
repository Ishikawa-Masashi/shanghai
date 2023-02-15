import * as React from 'react';

import { Box, BoxProps, Center } from '@chakra-ui/react';

export const Footer = (props: BoxProps) => {
  const { ...rest } = props;
  return (
    <Box
      backgroundColor="hsla(0deg, 0%, 0%, 0.3)"
      boxShadow="0px 0px 20px 20px rgb(0 0 0 / 30%)"
      userSelect="none"
      {...rest}
    >
      <Center alignItems="center" h="full" whiteSpace="nowrap">
        Copyright © 2022 Ishikawa Masashi. All Rights Reserved.
      </Center>
    </Box>
  );
};
