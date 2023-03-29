import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { StageSelect } from '../components/StageSelect';
import { Typography } from '../components/Typography';
import { useModal } from '../hooks/useModal';

import { Login } from '../components/Login';
import { EnterIcon } from '../icons/EnterIcon';

import { UserInfo } from '../components/UserInfo/UserInfo';
import { UserIcon } from '../icons/UserIcon';
// import { BasicFrame } from '../../components/Elements';
import { HelpCircleIcon } from '../icons/HelpCircleIcon';
import { PrivacyPolicy } from '../components/PrivacyPolicy';
import { ExitIcon } from '../icons/ExitIcon';
import { getAuth, signOut } from '@firebase/auth';
import { Settings } from '../components/Settings';
import { SettingsIcon } from '../icons/SettingsIcon';

import { useAuth } from '../hooks/useAuth';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  useDisclosure,
  Center,
  Heading,
  HStack,
} from '@chakra-ui/react';
import { About } from '../components/About';
import { ScaleTypographyWithScreenSize } from '../components/ScaleTypographyWithScreenSize';

export function Title() {
  const { loginUser } = useAuth();

  const {
    isOpen: isOpenSettingsModal,
    onOpen: onOpenSettingsModal,
    onClose: onCloseSettingsModal,
  } = useDisclosure();

  const {
    isOpen: isOpenAboutModal,
    onOpen: onOpenAboutModal,
    onClose: onCloseAboutModal,
  } = useDisclosure();

  //   const [AboutModal, openAboutModal, closeAboutModal, isOpenAboutModal] =
  //     useModal('root', {
  //       // preventScroll: true,
  //       closeOnOverlayClick: true,
  //     });
  //   const {
  //     isOpen: isOpenAboutModal,
  //     onOpen: onOpenAboutModal,
  //     onClose: onCloseAboutModal,
  //   } = useDisclosure();

  const [LoginModal, openLoginModal, closeLoginModal, isOpenLoginModal] =
    useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: true,
    });

  const [UserInfoModal, openUserInfoModal, closeUserInfo, isOpenUserInfo] =
    useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: true,
    });

  const [SettingsModal, openSettingsModal, closeSetting, isOpenSettings] =
    useModal('root', {
      preventScroll: true,
      closeOnOverlayClick: true,
    });

  React.useEffect(() => {
    loginUser && closeLoginModal();
  }, [loginUser, closeLoginModal]);

  return (
    <>
      <Box h="100%" w="100%" fontWeight="bold">
        <Center backgroundColor="rgba(48, 164, 35, 0.54)" h="5%">
          {/* <Heading
            color="white"
            whiteSpace="nowrap"
            padding="6px"
            // fontSize="calc(.5 * (1.5vh + 1.1vw))"
            fontSize="calc(0.9 * (1.5vh + 1.1vw))"
            // fontSize="calc(.5em + 1vw)"
            // fontSize="calc(.5rem + 1vw)"
          > */}
          {/* STAGE SELECT */}
          {/* <Box w="full"> */}
          <ScaleTypographyWithScreenSize color="white">
            STAGE SELECT
          </ScaleTypographyWithScreenSize>
          {/* </Box> */}
          {/* </Heading> */}
        </Center>
        <HStack h="95%">
          <Box width="60px"></Box>
          <Box w="full" h="full">
            <StageSelect />
          </Box>
          <Flex
            height="100%"
            width="60px"
            direction="column"
            justify="space-between"
          >
            <Box
              maxW="60px"
              border="2px solid"
              borderRadius="6px"
              backgroundColor="#636363"
              boxShadow="0px 4px 9px #0000006b"
              cursor="pointer"
              onClick={onOpenSettingsModal}
            >
              <SettingsIcon />
            </Box>
            {loginUser && (
              <div
                className="title__login-button"
                title="Sign Out"
                onClick={() => {
                  const auth = getAuth();
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                <ExitIcon />
              </div>
            )}

            {/* <Box
                maxW="60px"
                border="2px solid"
                borderRadius="6px"
                backgroundColor="#636363"
                boxShadow="0px 4px 9px #0000006b"
                cursor="pointer"
                onClick={() =>
                  loginUser ? openUserInfoModal() : openLoginModal()
                }
              >
                {loginUser ? <UserIcon /> : <EnterIcon />}
              </Box> */}
            {/* <Box
                maxW="60px"
                border="2px solid"
                borderRadius="50%"
                backgroundColor="#585858"
                boxShadow="0px 4px 9px rgb(0 0 0 / 42%)"
                cursor="pointer"
                onClick={onOpenAboutModal}
              >
                <HelpCircleIcon />
              </Box> */}
          </Flex>
        </HStack>
      </Box>
      <About isOpen={isOpenAboutModal} onClose={onCloseAboutModal} />
      <Settings isOpen={isOpenSettingsModal} onClose={onCloseSettingsModal} />
    </>
  );
}
