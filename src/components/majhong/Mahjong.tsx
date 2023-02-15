import React, { useMemo } from 'react';
import MahjongTile from './MahjongTile';

import { X, Y, Z, tileChar } from '../../mahjongSolitaire';

import './Mahjong.scss';
import { stages } from '../../mahjongSolitaire/layouts';
// import { Grid } from '../Stage/grid';
import { ClearScreen } from '../ClearScreen';
import { ReactP5WrapperComponent } from '../reactP5Wrapper';
import { sketch } from '../../effects/FireWork2';
import { useBoard, useRest } from '../../states/gameState';
import { Box, Flex, Grid } from '@chakra-ui/react';

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
    <Flex w="full" h="full" justify="center">
      {rest !== 0 ? (
        <Flex w="full" h="full" align="center" justify="center">
          <Box h="full" maxH="full" style={{ aspectRatio: '3 / 2' }}>
            <Grid
              w="full"
              h="full"
              gridTemplateRows="repeat(auto-fill, 5.882%)"
              gridTemplateColumns="repeat(auto-fill, 3.125%)"
            >
              {tiles}
            </Grid>
          </Box>
        </Flex>
      ) : (
        <ClearScreen timer={timer} time={time} />
      )}
    </Flex>
  );
}
