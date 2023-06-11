import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Mahjong from '../../components/majhong/Mahjong';
import { Typography } from '../../components/Typography';
import { GameMenu } from '../../components/GameMenu';
import { Timer } from '../../components/Timer';

// import './Game.scss';
import { ExitIcon } from '../../icons/ExitIcon';
import { HomeIcon } from '../../icons/HomeIcon';
import { newGame, useRest, useStage } from '../../states/gameState';
import { Box, Grid, HStack } from '@chakra-ui/react';

export function Game() {
  const stage = useStage();
  const rest = useRest();
  const navigate = useNavigate();

  const [stopWatch, timer] = Timer();

  const totalTiles = React.useMemo(() => {
    return stage.layout.filter((value) => value === '■').length;
  }, [stage]);

  React.useEffect(() => {
    if (totalTiles - 2 >= rest) {
      stopWatch.start();
    }
  }, [totalTiles, rest, stopWatch]);

  React.useEffect(() => {
    if (rest <= 0) {
      stopWatch.stop();
    }
  }, [totalTiles, rest, stopWatch]);

  return (
    <HStack height="calc(100% - 32px)">
      <Box height="100%">
        <GameMenu />
      </Box>
      <Box width="100%" height="100%" maxH="100%" padding="5vmin">
        <Mahjong timer={timer} time={stopWatch.getTime()} />
      </Box>
    </HStack>
  );
}
