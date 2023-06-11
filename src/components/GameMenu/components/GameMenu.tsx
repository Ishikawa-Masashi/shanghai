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
import { MdShuffle, MdRefresh } from 'react-icons/md';
import { FaUndo, FaRandom, FaRedo } from 'react-icons/fa';
import { IconButton } from '../../IconButton';

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
        h="full"
        flexDirection="column"
        // justify="flex-end"
        justify="center"
        // padding="6px"
        paddingLeft="6px"
      >
        <Box
          backdropFilter="brightness(0.5)"
          border="2px solid transparent"
          borderRadius="12px"
          padding="6px"
        >
          <IconButton
            width="42px"
            height="42px"
            label="元に戻す"
            icon={FaUndo}
            onClick={handleUndoClick}
            borderRadius="50%"
          />
          <Box height="6px" />
          <IconButton
            width="42px"
            height="42px"
            label="リセット"
            icon={FaRedo}
            onClick={handleResetClick}
            borderRadius="50%"
          />
          <Box height="6px" />
          <IconButton
            width="42px"
            height="42px"
            label="シャッフル"
            icon={FaRandom}
            onClick={handleNewGameClick}
            borderRadius="50%"
          />
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
