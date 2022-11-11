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
} from '@chakra-ui/react';
import { About } from '../components/About';

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
      <Grid
        templateAreas={`
        "header header header"
        "left main right"
        "footer footer footer"
      `}
        gridTemplateRows={'60px 1fr 60px'}
        gridTemplateColumns={'60px 1fr 60px'}
        h="100%"
        w="100%"
        gap="1"
        fontWeight="bold"
      >
        <GridItem pl="2" area={'header'}>
          {/* <Header /> */}
        </GridItem>
        <GridItem pl="2" area={'left'}>
          {/* <Left /> */}
        </GridItem>
        <GridItem pl="2" area={'main'}>
          {/* <Outlet /> */}
          <StageSelect />
        </GridItem>
        <GridItem pl="2" area={'right'}>
          {/* <Right /> */}
          <>
            <Flex height="100%" direction="column" justify="space-between">
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
              <Box
                maxW="60px"
                border="2px solid"
                borderRadius="50%"
                backgroundColor="#585858"
                boxShadow="0px 4px 9px rgb(0 0 0 / 42%)"
                cursor="pointer"
                onClick={onOpenAboutModal}
              >
                <HelpCircleIcon />
              </Box>
            </Flex>
          </>
        </GridItem>
        <GridItem pl="2" area={'footer'}></GridItem>
      </Grid>
      {/* <div className={'title'}>
        <div className={'title__main main'}></div>

        <LoginModal>
          <Login />
        </LoginModal> */}

      {/* <About /> */}
      {/* <AboutModal>
        <BasicFrame>
          <PrivacyPolicy
            author={'Masashi Ishikawa(石川 雅史)'}
            app={'Mahjong Solitaire'}
          />
        </BasicFrame>
      </AboutModal> */}
      {/* <UserInfoModal>
          <UserInfo />
        </UserInfoModal>
      </div> */}

      <About isOpen={isOpenAboutModal} onClose={onCloseAboutModal} />
      <Settings isOpen={isOpenSettingsModal} onClose={onCloseSettingsModal} />
    </>
  );
}
