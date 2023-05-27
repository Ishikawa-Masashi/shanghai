import * as React from 'react';

import {
  Box,
  Center,
  CenterProps,
  Flex,
  Heading,
  IconButton,
} from '@chakra-ui/react';

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
        backgroundImage="/images/Western-Red-Cedar-Architextures.jpg"
      >
        {/* <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          left="0"
          height="100%"
          // leftIcon={<Icon as={GiHamburgerMenu} boxSize={10} />}
          // leftIcon={GiHamburgerMenu}

          leftIcon={<Icon as={GiHamburgerMenu} />}
        >
        </Button> */}
        {/* <IconButton
          aria-label="Menu"
          icon={<GiHamburgerMenu />}
          colorScheme="facebook"
          size="sm"
          borderRadius="0"
          onClick={onOpen}
        /> */}
        <CustomButton
          onClick={onOpen}
          overflow="hidden"
          padding="4px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Box marginTop="-4px" marginBottom="-4px">
              <Icon as={GiHamburgerMenu} />
            </Box>
            <Box fontSize="10px" lineHeight="10px">
              Menu
            </Box>
          </Box>
        </CustomButton>
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
                <CustomButton
                  onClick={() => {
                    navigate('/');
                    //   reset();
                    newGame();

                    stopWatch.stop();
                    stopWatch.reset();
                  }}
                  overflow="hidden"
                  padding="6px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={MdArrowBack} />
                </CustomButton>
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
