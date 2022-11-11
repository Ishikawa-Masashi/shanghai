import React from 'react';

import './StageSelect.scss';

import { Stage } from '../../Stage';
import { stages } from '../../../mahjongSolitaire/layouts';
import { ArrowLeftIcon } from '../../../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon';
import { setStageIndex, useStageIndex } from '../../../states/gameState';
import { Box, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}
export function StageSelect() {
  const navigate = useNavigate();
  const stageIndex = useStageIndex();

  const handleArrowLeftButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setStageIndex(mod(stageIndex - 1, stages.length));
  };

  const handleArrowRightButtonClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setStageIndex(Math.abs((stageIndex + 1) % stages.length));
  };

  return (
    <div className={'stage-select'}>
      <div className={'stage-select__left'}>
        <div className="button" onClick={handleArrowLeftButtonClick}>
          <ArrowLeftIcon />
        </div>
      </div>
      <Stage />
      <div className={'stage-select__left right'}>
        <div className="button" onClick={handleArrowRightButtonClick}>
          <ArrowRightIcon />
        </div>
      </div>

      <Center gridArea="footer">
        <Box
          overflow="hidden"
          fontSize="3vmin"
          border="2px solid #1f0000"
          borderRadius="6px"
          backgroundColor="#8d0000e0"
          boxShadow="0px 4px 9px #0000006b"
          padding="2px"
          cursor="pointer"
          color="white"
          userSelect="none"
          onClick={() => navigate('/game')}
        >
          Game Start
        </Box>
      </Center>
    </div>
  );
}
