import React, { useMemo } from 'react';
import MahjongTile from './MahjongTile';

import {
  main,
  getState,
  X,
  Y,
  Z,
  tileChar,
  Board,
  isEmpty,
} from '../../mahjongSolitaire';

import './Mahjong.scss';
import { stages } from '../../mahjongSolitaire/layouts';
// import { Grid } from '../Stage/grid';
import { ClearScreen } from '../ClearScreen';
import { ReactP5WrapperComponent } from '../reactP5Wrapper';
import { sketch } from '../../effects/FireWork2';
import { useBoard, useRest } from '../../states/gameState';
import { AspectRatio, Box, Grid } from '@chakra-ui/react';

type Props = {
  // stage?: number[];
  timer: JSX.Element;
  time: number;
};

export default function Mahjong(props: Props) {
  const { timer, time } = props;
  const board = useBoard();
  const rest = useRest();

  const tiles = useMemo(() => {
    const tiles: JSX.Element[] = [];

    for (let index = 0; index < board.length; ++index) {
      const value = board[index];

      if (!value) {
        continue;
      }

      const x = X(index);
      const y = Y(index);
      const z = Z(index);
      const char = tileChar(value);
      if (char) {
        tiles.push(
          <MahjongTile
            index={index}
            x={x}
            y={y}
            z={z}
            name={char}
            key={index}
          />
        );
      }
    }
    return tiles;
  }, [board]);

  return (
    <Box w="full" h="full" display="flex" className={'mahjong'}>
      {rest !== 0 ? (
        <Box
          w="full"
          h="full"
          gridArea="main"
          display="flex"
          alignItems="center"
        >
          <AspectRatio ratio={3 / 2} flex="1 1 auto">
            <Box w="full" h="full">
              <Grid
                w="full"
                h="full"
                gridTemplateRows="repeat(auto-fill, 5.882%)"
                gridTemplateColumns="repeat(auto-fill, 3.125%)"
              >
                {tiles}
              </Grid>
            </Box>
          </AspectRatio>
        </Box>
      ) : (
        <ClearScreen timer={timer} time={time} />
      )}
      {/* {rest === 0 && <ClearScreen timer={timer} time={time} />} */}
    </Box>
  );
}
