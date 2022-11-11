import * as React from 'react';

import {
  Box,
  Grid,
  GridItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { VolumeSlider } from './VolumeSlider';

type Props = { isOpen: boolean; onClose?: () => void };

export const Settings = (props: Props) => {
  const { isOpen, onClose = () => {} } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay zIndex={3001} />
      <Box zIndex={3002} position="fixed">
        <ModalContent zIndex={3003}>
          <ModalHeader>Settings</ModalHeader>
          <Box
            //   backgroundColor="#1401c1e6"
            // boxShadow="0px 2px 0px 0px rgb(1 1 58 / 90%)"
            // border="2px solid black"
            // borderRadius="6px"
            padding="6px"
            maxWidth="80vw"
            maxHeight="80vh"
            // backgroundColor="#050034e6"
          >
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <GridItem w="100%" h="10">
                Sound Effects Volume
              </GridItem>
              <GridItem w="100%" h="10">
                <VolumeSlider />
              </GridItem>
            </Grid>
          </Box>
        </ModalContent>
      </Box>
    </Modal>
  );
};
