import * as React from 'react';
import { useNavigate } from 'react-router';

import { sketch } from '../../effects/FireWork2';
import { useModal } from '../../hooks/useModal';
import { useRankingsContext } from '../../providers/RankingsProvider';
import { ordinal, toDisplayTime } from '../../util';
import { ReactP5WrapperComponent } from '../reactP5Wrapper';
import { SignInAndInputName } from './SignIn';
import { Typography } from '../Typography';

import { InputName } from './InputName';
import { VirtualList } from '../VirtualList';

import './clear-screen.scss';
import styles from './ClearScreen.module.scss';
import { Button } from '../Elements';
import { newGame, useStage } from '../../states/gameState';
import { useAuth } from '../../hooks/useAuth';
import p5 from 'p5';

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

export const ClearScreen: React.VFC<Props> = (props) => {
  const { timer, time } = props;
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
    window.RPGAtsumaru.scoreboards.display(0);
    // window.addEventListener('mousedown', onMouseDown, { capture: true });

    return () => {
      // window.removeEventListener('mousedown', onMouseDown, { capture: true });
    };
  }, []);

  const ranking = undefined; // React.useMemo(() => rankings[stage.name], [stage, rankings]);

  const records = undefined; //React.useMemo(() => ranking?.records, [ranking]);

  const rank = React.useMemo(() => {
    if (!records || !records.length) {
      return 1;
    }

    let index = 1;
    for (const value of records.values()) {
      if (value.time < time) {
        index++;
      }
    }
    return index;
    // const index = records.findIndex((value) => value.time < time);
    // return index !== -1 ? index + 1 : undefined;
  }, [records, time]);

  const [
    SignInAndInputNameModal,
    openSignInAndInputNameModal,
    closeSignInAndInputNameModal,
    isOpenSignInAndInputNameModal,
  ] = useModal('root', {
    preventScroll: true,
    // closeOnOverlayClick: true,
  });

  const [
    InputNameModal,
    openInputNameModal,
    closeInputNameModal,
    isOpenInputNameModal,
  ] = useModal('root', {
    preventScroll: true,
    // closeOnOverlayClick: true,
  });

  React.useEffect(() => {
    if (rank) {
      loginUser ? openInputNameModal() : openSignInAndInputNameModal();
    }
  }, [rank, openSignInAndInputNameModal, openInputNameModal, loginUser]);

  return (
    <div className="clear-screen" ref={ref}>
      <ReactP5WrapperComponent
        sketch={(p: p5) => {
          if (ref.current) {
            sketch(p, ref.current);
          }
        }}
      />

      <div className="clear-screen__message">
        <div className="jackpots label">Clear</div>
        {timer}
        {/* {ranking && rank && (
          <Typography style={{ padding: 0 }}>{`Your ranking is ${ordinal(
            rank
          )}.`}</Typography>
        )}

        {records && (
          <div className={styles.Table}>
            <div className={styles.TableHead}>
              <div>Rank</div>
              <div>Name</div>
              <div>Time</div>
            </div>
            <VirtualList
              index={rank - 1}
              size={records.length}
              renderItem={(index) => (
                <div
                  className={
                    index === rank - 1 ? styles.HighlightRow : styles.TableRow
                  }
                >
                  <div>{ordinal(index + 1)}</div>
                  <div>{records[index].name}</div>
                  <div>{toDisplayTime(records[index].time)}</div>
                </div>
              )}
            />
          </div>
        )} */}
      </div>

      <Button onClick={onMouseDown} style={{ width: '6rem', margin: 'auto' }}>
        <Typography style={{ padding: 0 }}>Exit</Typography>
      </Button>
      {/* <SignInAndInputNameModal>
        <SignInAndInputName
          rank={rank}
          successCallback={() => {
            closeSignInAndInputNameModal();
            openInputNameModal();
          }}
          close={closeSignInAndInputNameModal}
        />
      </SignInAndInputNameModal>
      <InputNameModal>
        <InputName
          rank={rank}
          close={closeInputNameModal}
          stageName={stage.name}
          time={time}
        />
      </InputNameModal> */}
    </div>
  );
};
