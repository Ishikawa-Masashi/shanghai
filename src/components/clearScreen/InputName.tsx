import React from 'react';

import {
  doc,
  updateDoc,
  setDoc,
  getDoc,
  FieldValue,
  serverTimestamp,
} from 'firebase/firestore';
// import { useCollection, useDocument } from 'react-firebase-hooks/firestore';

import { BasicFrame, Button } from '../Elements';
import { Typography } from '../Typography';
import { useAuth } from '../../hooks/useAuth';

import styles from './InputName.module.scss';
import { db } from '../../plugins/firebase';
import { Ranking } from './ClearScreen';
import { getCurrentTime } from '../../util/getCurrentTime';
import { insert } from '../../util/arryas';
import { ordinal } from '../../util';
import { useLoginUserContext } from '../../providers/LoginUserProvider';

type Props = {
  stageName: string;
  rank: number;
  close: () => void;
  time: number;
};

export const InputName: React.VFC<Props> = (props) => {
  const { rank, close, stageName, time } = props;

  const { userInfo, loginUser } = useLoginUserContext();

  const [name, setName] = React.useState('');

  // const recordTime = async () => {
  //   const docRef = doc(db, 'rankings', stageName);
  //   const docSnap = await getDoc(docRef);
  //   const data = docSnap.data() as Ranking;

  //   const records = insert(data.records, rank - 1, {
  //     time,
  //     name,
  //     createdAt: getCurrentTime(),
  //   });
  //   await setDoc(docRef, {
  //     records,
  //   });
  // };

  const updateUserInfo = async (date: string) => {
    if (!loginUser) {
      return;
    }
    const stages = userInfo.stages;
    const stage = stages[stageName] ?? [];
    const record = [...stage, { time, date }];
    record.sort((a, b) => a.time - b.time);
    await updateDoc(doc(db, 'users', loginUser.uid), {
      stages: {
        ...stages,
        // [stageName]: [...stage, { time, date }],
        [stageName]: [...record],
      },
    });
  };

  const onClickAsync = async (name: string) => {
    const docRef = doc(db, 'rankings', stageName);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data() as Ranking;

    const date = getCurrentTime();
    const records = insert(data.records, rank - 1, {
      time,
      name,
      createdAt: date,
    });

    // records.sort((a, b) => a.time - b.time); // 不要？
    await setDoc(docRef, {
      records,
    });

    await updateUserInfo(date);
  };

  return (
    <BasicFrame>
      <Typography style={{ padding: 0 }}>{`Your ranking is ${ordinal(
        rank
      )}.`}</Typography>
      <Typography>
        If you want to record your clear time in the ranking, please enter your
        name.
      </Typography>

      <div className={styles.InputContainer}>
        <label htmlFor="name">
          <Typography>Name </Typography>
        </label>
        <input
          className={styles.Input}
          type="text"
          id="name"
          name="name"
          required
          size={10}
          placeholder="Enter your name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <Button
        style={{ margin: '2rem', backgroundColor: '#408d00e0' }}
        onClick={() => {
          if (name) {
            close();
            onClickAsync(name);
          }
        }}
      >
        <Typography>Record clear time.</Typography>
      </Button>
      <Button
        style={{ margin: '2rem', backgroundColor: '#408d00e0' }}
        onClick={() => close()}
      >
        <Typography>I don't record clear time.</Typography>
      </Button>
    </BasicFrame>
  );
};
