import React, { CSSProperties, useEffect, useContext, useState } from 'react';
import { getMahjongIconFromName2 } from '../../icons';

import { answerSound, cancelSound, tileClickSound } from '../../sound';
import { getState, H, select, W, X, Y, Z } from '../../mahjongSolitaire';
import { explode } from '../../effects/Explosion';

import './MahjongTile.scss';
import { useSettingsContext } from '../../contexts/settings';
import { setBoard, setTarget, useTarget } from '../../states/gameState';
import { Box, GridItem } from '@chakra-ui/react';

type Props = {
  index: number;

  name: string;

  x: number;
  y: number;
  z: number;

  disabled?: boolean;
};

const toClassName: Record<string, string> = {
  Ⅰ: 'bamboo-1',
  Ⅱ: 'bamboo-2',
  Ⅲ: 'bamboo-3',
  Ⅳ: 'bamboo-4',
  Ⅴ: 'bamboo-5',
  Ⅵ: 'bamboo-6',
  Ⅶ: 'bamboo-7',
  Ⅷ: 'bamboo-8',
  Ⅸ: 'bamboo-9',
  '1': 'dots-1',
  '2': 'dots-2',
  '3': 'dots-3',
  '4': 'dots-4',
  '5': 'dots-5',
  '6': 'dots-6',
  '7': 'dots-7',
  '8': 'dots-8',
  '9': 'dots-9',
  一: 'characters-1',
  二: 'characters-2',
  三: 'characters-3',
  四: 'characters-4',
  五: 'characters-5',
  六: 'characters-6',
  七: 'characters-7',
  八: 'characters-8',
  九: 'characters-9',
  竹: 'bamboo',
  菊: 'chrysanthemum',
  蘭: 'orchid',
  梅: 'plum',
  東: 'east',
  北: 'north',
  南: 'south',
  西: 'west',
  秋: 'autumn',
  春: 'spring',
  夏: 'summer',
  冬: 'winter',
  中: 'red',
  發: 'green',
  '　': 'white',
};

export default function MahjongTile(props: Props) {
  const { x, y, z, name, index, disabled = false } = props;

  const { seVolume } = useSettingsContext();
  //   const { target, setTarget, setBoard } = useContext(MahjongContext);
  const target = useTarget();

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const isSelected = target === index;
    if (isSelected) {
      tileClickSound.play(seVolume);
    }
    setIsSelected(target === index);
  }, [target, index]);

  const [isBounce, setIsBounce] = useState(false);

  const style4: CSSProperties = {
    zIndex: z * 32 * 17 + y + x * 17,
  };

  const icon = getMahjongIconFromName2(name)();

  const className = `mahjong-tile${isSelected ? ' selected blink' : ''} ${
    isBounce ? 'bounce' : ''
  }`;

  return (
    <GridItem rowStart={y} rowEnd={y + 2} colStart={x} colEnd={x + 2}>
      <Box
        id={`X:${x},Y:${y},Z:${z}`}
        className={className}
        bottom={`${z * 20}%`}
        right={`${z * 20}%`}
        onClick={(ev) => {
          if (disabled) {
            return;
          }
          const currentState = getState();
          select(index);
          const nextState = getState();

          if (currentState.rest === nextState.rest && nextState.target === -1) {
            cancelSound.play(seVolume);
            setIsBounce(true);
            select(currentState.target);
            setTimeout(() => {
              setIsBounce(false);
            }, 100);
            return;
          }

          if (currentState.rest !== nextState.rest) {
            setBoard(nextState.board);
            answerSound.stop();
            answerSound.play(seVolume);

            const x1 = X(currentState.target);
            const y1 = Y(currentState.target);
            const z1 = Z(currentState.target);

            const x2 = X(index);
            const y2 = Y(index);
            const z2 = Z(index);

            const element = document.getElementById(
              `X:${x1},Y:${y1},Z:${z1}`
            ) as HTMLElement;

            const { clientHeight, clientWidth } = element;
            const rect1 = element.getBoundingClientRect();
            const offset = clientHeight * 0.1;
            explode(
              rect1.left + clientWidth / 2 - offset * z,
              rect1.top + clientHeight / 2 - offset * z
            );

            const rect2 = (ev.target as HTMLElement).getBoundingClientRect();
            explode(
              rect2.left + clientWidth / 2 - offset * z,
              rect2.top + clientHeight / 2 - offset * z
            );
          }
          setTarget(nextState.target);
        }}
        style={style4}
      >
        {disabled ? null : icon}
      </Box>
    </GridItem>
  );
}
