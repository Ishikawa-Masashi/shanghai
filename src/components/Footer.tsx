import * as React from 'react';

import { Box, Center } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      //   width="100%"
      //   height="100%"
      backgroundColor="hsla(0deg, 0%, 0%, 0.3)"
      boxShadow="0px 0px 20px 20px rgb(0 0 0 / 30%)"
    >
      <Center alignItems="center" h="full">
        Copyright © 2022 Ishikawa Masashi. All Rights Reserved.
      </Center>
    </Box>
  );
};
