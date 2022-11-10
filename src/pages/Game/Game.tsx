import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Mahjong from '../../components/majhong/Mahjong';
import { Typography } from '../../components/Typography';
import { GameMenu } from '../../components/GameMenu';
import { Timer } from '../../components/Timer';

import './Game.scss';
import { reset } from '../../mahjongSolitaire';
import { ExitIcon } from '../../icons/ExitIcon';
import { HomeIcon } from '../../icons/HomeIcon';
import { useRest, useStage } from '../../states/gameState';
import { Box } from '@chakra-ui/react';

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
    <div className="game">
      <div className="header game__header">
        <div className="game__header-main">
          <div className="game__tiles-label">
            <Typography style={{ marginRight: '1rem' }}>Tiles: </Typography>
            <Typography style={{ width: '7.5vmin' }}>{rest}</Typography>
          </div>
          {timer}
        </div>
        {/* <div className="right">
          <SettingsMenu />
        </div> */}
        <div className="left">
          <div
            className="button-container"
            onClick={() => {
              navigate('/');
              reset();
            }}
          >
            <div className="button">
              <HomeIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="main">
        <Mahjong timer={timer} time={stopWatch.getTime()} />
      </div>
      <div className="right">
        <GameMenu />
      </div>
      <Box gridArea="footer" />
    </div>
  );
}
