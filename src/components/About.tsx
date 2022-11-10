import React from 'react';

import { Box, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';

import { PrivacyPolicy } from './PrivacyPolicy';

type Props = { isOpen: boolean; onClose: () => void };

export const About = (props: Props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <Box
          backgroundColor="#1401c1e6"
          boxShadow="0px 2px 0px 0px rgb(1 1 58 / 90%)"
          border="2px solid black"
          borderRadius="6px"
          padding="6px"
          maxWidth="80vw"
          maxHeight="80vh"
        >
          <PrivacyPolicy
            author={'Masashi Ishikawa(石川 雅史)'}
            app={'Mahjong Solitaire'}
          />
        </Box>
      </ModalContent>
    </Modal>
  );
};
