import React, { useContext } from 'react';
import { init, reset, undo } from '../../../mahjongSolitaire';

import { UndoIcon } from '../../../icons/UndoIcon';
import { ReloadIcon } from '../../../icons/ReloadIcon';
import { PlusIcon } from '../../../icons/PlusIcon';

import './GameMenu.scss';
import { setBoard } from '../../../states/gameState';
import { Box, Flex } from '@chakra-ui/react';
import { CustomButton } from '../../CustomButton';

import { Icon } from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';

export function GameMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleUndoClick = (event: React.MouseEvent<HTMLElement>) => {
    const state = undo();
    setBoard(state.board);
    setAnchorEl(event.currentTarget);
  };

  const handleResetClick = (event: React.MouseEvent<HTMLElement>) => {
    const state = reset();
    setBoard(state.board);
    setAnchorEl(event.currentTarget);
  };

  const handleNewGameClick = () => {
    const state = init();
    setBoard(state.board);
  };

  return (
    <>
      <Flex
        // backgroundColor="rgb(0,76,82)"
        h="full"
        flexDirection="column"
        justify="flex-end"
        padding="6px"
      >
        <Box w="full">
          <CustomButton
            // onClick={onOpen}
            overflow="hidden"
            padding="6px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="50%"
          >
            <Icon as={GiHamburgerMenu} />
          </CustomButton>
        </Box>
      </Flex>
      {/* <div className={'game-menu'}>
        <div className="game-menu__button-container" onClick={handleUndoClick}>
          <div className="button">
            <UndoIcon />
          </div>
        </div>
        <div className="game-menu__button-container" onClick={handleResetClick}>
          <div className="button">
            <ReloadIcon />
          </div>
        </div>

        <div
          className="game-menu__button-container"
          onClick={handleNewGameClick}
        >
          <div className="button">
            <PlusIcon />
          </div>
        </div>
      </div> */}
    </>
  );
}
