import * as React from 'react';

import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { VolumeSlider } from './VolumeSlider';
import { useSeVolume } from '../states/settingsState';

type Props = { isOpen: boolean; onClose?: () => void };

export const Settings = (props: Props) => {
  const { isOpen, onClose = () => {} } = props;

  const seVolume = useSeVolume();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay zIndex={3001} />
      <Box zIndex={3002} position="fixed">
        <ModalContent zIndex={3003}>
          <ModalHeader>
            <Center>Settings</Center>
          </ModalHeader>
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
                <Flex align="center">
                  <Box>Sound Effects Volume</Box>
                </Flex>
              </GridItem>
              <GridItem w="100%" h="10">
                <VolumeSlider value={seVolume * 100} />
              </GridItem>
            </Grid>
          </Box>
        </ModalContent>
      </Box>
    </Modal>
  );
};
