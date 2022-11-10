import React from 'react';
import { Typography } from '../Elements';
import { useSettingsContext } from '../../contexts/settings';

// import styles from './Settings.module.scss';

import { Box, Modal, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { VolumeSlider } from '../VolumeSlider';

type Props = { isOpen: boolean; onClose: () => void };

export const Settings = (props: Props) => {
  const { isOpen, onClose = () => {} } = props;

  const { setBgmVolume, bgmVolume, setSeVolume, seVolume } =
    useSettingsContext();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay zIndex={3001} />
      <Box zIndex={3002} position="fixed">
        <ModalContent zIndex={3003}>
          <Box
            //   backgroundColor="#1401c1e6"
            boxShadow="0px 2px 0px 0px rgb(1 1 58 / 90%)"
            border="2px solid black"
            borderRadius="6px"
            padding="6px"
            maxWidth="80vw"
            maxHeight="80vh"
            backgroundColor="#050034e6"
          >
            <Typography>Settings</Typography>

            <VolumeSlider />
            {/* <div className={styles.InputContainer}>
              <div className={styles.InputContainer}>
                <label htmlFor="sound-effects">
                  <Typography
                    style={{
                      fontSize: '3vmin',
                      textShadow: 'initial',
                    }}
                  >
                    Sound Effects Volume
                  </Typography>
                </label>
                <input
                  type="range"
                  id="sound-effects"
                  name="sound-effects"
                  min="0"
                  max="1"
                  value={seVolume}
                  step="0.1"
                  onChange={(evt) => {
                    setSeVolume(Number(evt.target.value));
                  }}
                />
                <Typography style={{ fontSize: '3vmin', width: '3rem' }}>
                  {seVolume * 100}
                </Typography>
              </div>
            </div> */}
          </Box>
        </ModalContent>
      </Box>
    </Modal>
  );
};
