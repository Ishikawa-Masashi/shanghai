import * as React from 'react';
import { useNavigate } from 'react-router';

import { sketch } from '../../effects/FireWork2';
import { useRankingsContext } from '../../providers/RankingsProvider';
import { ordinal, toDisplayTime } from '../../util';
import { ReactP5WrapperComponent } from '../reactP5Wrapper';
import { Typography } from '../Typography';

import './clear-screen.scss';
import styles from './ClearScreen.module.scss';
import { Button } from '../Elements';
import { newGame, useStage } from '../../states/gameState';
import { useAuth } from '../../hooks/useAuth';
import p5 from 'p5';
import { Box, keyframes } from '@chakra-ui/react';
import type { ScoreboardData } from '@atsumaru/api-types';
import { motion } from 'framer-motion';

const animationKeyframes = keyframes`
  0% {text-shadow: -0.1vw 0vw 0.1vw #fed128, -0.15vw 0vw 0.2vw #fed128,
      -0.2vw 0vw 0.2vw #fed128, -0.1vw 0vw 3vw #f0130b, -0.2vw 0vw 3vw #f0130b,
      -0.4vw 0vw 3vw #f0130b, -0.1vw 0vw 5vw #f0130b, -0.2vw 0vw 5vw #f0130b,
      -0.4vw 0vw 0.8vw #f0130b, 0.2vw 0vw 10vw #f0130b;
    color: #fed128;}
  50% {    text-shadow: -0.1vw 0vw 0.1vw #705c12, -0.15vw 0vw 0.2vw #705c12,
      -0.2vw 0vw 0.2vw #705c12, -0.1vw 0vw 0.1vw #5c0704,
      -0.2vw 0vw 0.1vw #5c0704, -0.4vw 0vw 0.1vw #5c0704,
      -0.1vw 0vw 0.2vw #5c0704, -0.2vw 0vw 0.2vw #5c0704,
      -0.4vw 0vw 0.2vw #5c0704, 0.2vw 0vw 0.5vw #5c0704;
    color: #705c12;}
  100% {
    text-shadow: -0.1vw 0vw 0.1vw #fed128, -0.15vw 0vw 0.2vw #fed128,
      -0.2vw 0vw 0.2vw #fed128, -0.1vw 0vw 3vw #f0130b, -0.2vw 0vw 3vw #f0130b,
      -0.4vw 0vw 3vw #f0130b, -0.1vw 0vw 5vw #f0130b, -0.2vw 0vw 5vw #f0130b,
      -0.4vw 0vw 0.8vw #f0130b, 0.2vw 0vw 10vw #f0130b;
    color: #fed128;
}
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

type Props = {
  timer: JSX.Element;
  time: number;
};

type Records = {
  name: string;
  time: number;
  createdAt: string;
}[];

export type Ranking = {
  records: Records;
};

export type Rankings = Record<string, Ranking>;

const timeLimit = 3600000;

export const ClearScreen = (props: Props) => {
  const { timer, time } = props;

  const [scoreboardData, setScoreboardData] = React.useState<
    ScoreboardData | undefined
  >(undefined);

  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const stage = useStage();

  const { loginUser } = useAuth();
  const { rankings } = useRankingsContext();

  React.useEffect(() => {
    console.log(JSON.stringify(rankings));
  }, [rankings]);

  const onMouseDown = () => {
    navigate('/');
    newGame();
  };

  React.useEffect(() => {
    // window.RPGAtsumaru?.scoreboards.display(1);

    const callback = async () => {
      const score = timeLimit - time;
      await window.RPGAtsumaru?.scoreboards.setRecord(1, score);
      const scoreboardData = await window.RPGAtsumaru?.scoreboards.getRecords(
        1
      );
      setScoreboardData(scoreboardData);
    };

    callback();

    return () => {};
  }, []);

  const rank = React.useMemo(() => {
    if (scoreboardData) {
      const ranking = scoreboardData.myRecord?.rank;
      console.log(ranking);
      return ranking;
    }
    return [];
  }, [scoreboardData]);

  const ranking = React.useMemo(() => {
    if (scoreboardData) {
      const ranking = scoreboardData.ranking.sort((a, b) => a.score - b.score);
      console.log(ranking);
      return ranking;
    }
    return [];
  }, [scoreboardData]); // React.useMemo(() => rankings[stage.name], [stage, rankings]);

  const ranking2 = React.useMemo(() => {
    if (scoreboardData) {
      const ranking = scoreboardData.myRecord;
      console.log(ranking);
      return ranking;
    }
    return [];
  }, [scoreboardData]); // React.useMemo(() => rankings[stage.name], [stage, rankings]);

  return (
    <>
      <Box position="absolute" left="0" bottom="0" right="0" top="0" ref={ref}>
        <ReactP5WrapperComponent
          sketch={(p: p5) => {
            if (ref.current) {
              sketch(p, ref.current);
            }
          }}
        />
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box
          fontFamily="moon"
          fontSize="5vmin"
          as={motion.div}
          animation={animation}
        >
          Clear
        </Box>
        {timer}

        {ranking && (
          <Box>
            {ranking.map((record) => {
              return (
                <Box>
                  <Box>{record.userName}</Box>
                  <Box>{toDisplayTime(timeLimit - record.score)}</Box>
                </Box>
              );
            })}
          </Box>
        )}

        <Button onClick={onMouseDown} style={{ width: '6rem' }}>
          <Typography style={{ padding: 0 }}>Exit</Typography>
        </Button>
      </Box>
    </>
  );
};
