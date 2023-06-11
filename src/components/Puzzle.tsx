import * as React from 'react';
import { useMemo } from 'react';
import MahjongTile from './majhong/MahjongTile';

import { X, Y, Z, tileChar, W, create } from '../mahjongSolitaire';

// import './Stage.scss';

import { Typography } from './Typography';
import { useBoard, useStageIndex } from '../states/gameState';
import { stages } from '../mahjongSolitaire/layouts';
import { AspectRatio, Box, Center, Grid, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ScaleTypographyWithScreenSize } from './ScaleTypographyWithScreenSize';

type Props = {
  stage: {
    name: string;
    layout: string[];
  };
};

export function Puzzle(props: Props) {
  const { stage } = props;

  const navigate = useNavigate();
  // const board = useBoard();
  const { board } = create(stage.layout);
  // const stageIndex = useStageIndex();

  // const stage = stages[stageIndex];

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
            // disabled
          />
        );
      }
    }
    return tiles;
  }, [board]);

  return (
    <Box w="full" h="full" style={{ aspectRatio: '3 / 2' }} maxH="full">
      <Grid
        w="full"
        h="full"
        gridTemplateRows="repeat(auto-fill, 5.882%)"
        gridTemplateColumns="repeat(auto-fill, 3.125%)"
      >
        {tiles}
      </Grid>
    </Box>
  );
}
