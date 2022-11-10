import React from 'react';

import './StageSelect.scss';

import { Stage } from '../../Stage';
import { stages } from '../../../mahjongSolitaire/layouts';
import { ArrowLeftIcon } from '../../../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../../icons/ArrowRightIcon';
import { setStageIndex, useStageIndex } from '../../../states/gameState';

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}
export function StageSelect() {
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
    </div>
  );
}
