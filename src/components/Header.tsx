import * as React from 'react';

import { Box, Center, CenterProps, Flex, Heading } from '@chakra-ui/react';

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from '@chakra-ui/react';

import { Icon } from '@chakra-ui/react';
import { MdArrowBack } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaInfo } from 'react-icons/fa';
import { CustomButton } from './CustomButton';
import { Information } from './Information';
import { Settings } from './Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import { newGame, useRest, useStage } from '../states/gameState';
import { Timer } from './Timer';
import { IconButton } from './IconButton';

export const Header = (props: CenterProps) => {
  const location = useLocation();

  const strokeWidth = 2,
    strokecolor = '#000';

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isInformationOpen,
    onOpen: onInformationOpen,
    onClose: onInformationClose,
  } = useDisclosure();

  const {
    isOpen: isSettingsOpen,
    onOpen: onSettingsOpen,
    onClose: onSettingsClose,
  } = useDisclosure();

  // const btnRef = React.useRef<HTMLButtonElement>() as
  //   | React.RefObject<HTMLButtonElement>
  //   | undefined;

  const btnRef = React.useRef<HTMLDivElement>() as
    | React.RefObject<HTMLDivElement>
    | undefined;

  const [stopWatch, timer] = Timer();

  const navigate = useNavigate();
  const rest = useRest();

  const stage = useStage();

  const totalTiles = React.useMemo(() => {
    return stage.layout.filter((value) => value === '■').length;
  }, [stage]);

  React.useEffect(() => {
    if (totalTiles - 2 >= rest) {
      stopWatch.start();
    }
  }, [totalTiles, rest, stopWatch]);

  React.useEffect(() => {
    if (rest <= 0) {
      stopWatch.stop();
    }
  }, [totalTiles, rest, stopWatch]);
  return (
    <>
      <Flex
        justify="space-between"
        w="full"
        backdropFilter="brightness(0.2)"
        // backgroundImage="/images/Western-Red-Cedar-Architextures.jpg"
      >
        <IconButton label="Menu" icon={GiHamburgerMenu} onClick={onOpen} />
        <Box w="full" height="100%">
          <Flex
            w="full"
            height="100%"
            fontSize="3vmin"
            color="white"
            userSelect="none"
            paddingLeft="16px"
            alignItems="center"
            // textShadow={`${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, ${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}`}
          >
            {location.pathname === '/' ? (
              'パズル選択'
            ) : (
              <Flex h="full">
                <IconButton
                  label="Back"
                  icon={MdArrowBack}
                  onClick={() => {
                    navigate('/');
                    //   reset();
                    newGame();

                    stopWatch.stop();
                    stopWatch.reset();
                  }}
                />
                <Box paddingLeft="32px" paddingRight="24px">{`牌 ${rest}`}</Box>
                {timer}
              </Flex>
            )}
          </Flex>
          {/* <Heading
            fontSize="5vmin"
            color="white"
            userSelect="none"
            paddingLeft="32px"
            alignItems="center"
            textShadow={`${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, ${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}`}
          >
            Mahjongg Solitaire
          </Heading> */}
        </Box>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Center>Menu</Center>
          </DrawerHeader>

          <DrawerBody padding="0">
            <Button
              w="full"
              colorScheme="teal"
              variant="ghost"
              onClick={onSettingsOpen}
              justifyContent="flex-start"
            >
              <Icon as={FaInfo} />
              <Box fontSize={17} paddingLeft="12px">
                設定
              </Box>
            </Button>
            <Button
              w="full"
              colorScheme="teal"
              variant="ghost"
              onClick={onInformationOpen}
              justifyContent="flex-start"
            >
              <Icon as={FaInfo} />
              <Box fontSize={17} paddingLeft="12px">
                情報
              </Box>
            </Button>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <Information isOpen={isInformationOpen} onClose={onInformationClose} /> */}
      <Information
        isOpen={isInformationOpen}
        onClose={() => {
          onClose();
          onInformationClose();
        }}
      />
      <Settings isOpen={isSettingsOpen} onClose={onSettingsClose} />
    </>
  );
};
