import { Box, BoxProps, ButtonProps } from '@chakra-ui/react';
import * as React from 'react';

// type Props = React.PropsWithChildren<{}>;

export const CustomButton = (props: BoxProps) => {
  const { children, ...rest } = props;

  return (
    <Box
      as="button"
      // height="24px"
      height="100%"
      // lineHeight="1.2"
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      border="1px"
      // px="8px"
      // borderRadius="2px"
      fontSize="14px"
      fontWeight="semibold"
      // bg="#f5f6f7"
      // borderColor="#ccd0d5"

      borderColor="rgb(139,165,167)"
      color="white"
      backgroundColor="rgb(0,51,55)"
      // _hover={{ bg: '#ebedf0' }}
      _hover={{ bg: 'rgb(22,74,78)' }}
      _active={{
        bg: 'rgb(22,74,78)',
        // transform: 'scale(0.98)',
        borderColor: '#bec3c9',

        color: 'black',
      }}
      _focus={
        {
          // color: 'black',
          // boxShadow:
          //   '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }
      }
      {...rest}
    >
      {/* Join Group */}
      {children}
    </Box>
  );
};
