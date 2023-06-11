import * as React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react';
import { CustomButton } from './CustomButton';
import type { IconType } from 'react-icons/lib';

type Props = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  icon: IconType;
  label: string;
} & BoxProps;

export const IconButton = (props: Props) => {
  const { onClick, icon, label, ...rest } = props;
  return (
    <>
      <CustomButton
        onClick={onClick}
        overflow="visible"
        padding="4px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...rest}
      >
        <Box>
          <Box marginTop="-4px" marginBottom="-4px">
            <Icon as={icon} />
          </Box>
          <Box fontSize="10px" lineHeight="10px" whiteSpace="nowrap">
            {label}
          </Box>
        </Box>
      </CustomButton>
    </>
  );
};
