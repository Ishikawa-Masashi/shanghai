import React from 'react';
import { db } from '../plugins/firebase';
import {
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  doc,
  setDoc,
  Timestamp,
} from '@firebase/firestore';
import { useLoginUser } from '../states/authState';

export type RankingsContextType = {
  // loginUser: LoginUser | null;
  // setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
  rankings: Rankings;
};

type Records = {
  name: string;
  time: number;
  createdAt: Timestamp;
}[];

export type Ranking = {
  records: Records;
};

export type Rankings = Record<string, Ranking>;

const RankingsContext = React.createContext({} as RankingsContextType);

export const useRankingsContext = () => React.useContext(RankingsContext);

type Props = React.PropsWithChildren<{}>;

export const RankingsProvider = (props: Props) => {
  const { children } = props;
  const loginUser = useLoginUser();

  const [rankings, setRankings] = React.useState<Rankings>({});

  React.useEffect(() => {
    const onMountAsync = async () => {
      const rankingsRef = collection(db, 'rankings');

      const docs = await getDocs(rankingsRef);

      const rankings: Rankings = {};
      docs.forEach((doc) => {
        // console.log(
        //   `rankings: id: ${doc.id} data: ${JSON.stringify(doc.data())}`
        // );
        const data = doc.data() as Ranking;
        rankings[doc.id] = data;
      });

      setRankings(rankings);

      const q = query(rankingsRef);

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setRankings({ ...rankings, [doc.id]: doc.data() as Ranking });
        });
        // console.log('Users update!');
      });
    };
    onMountAsync();
  }, [loginUser]);

  return (
    <RankingsContext.Provider value={{ rankings }}>
      {children}
    </RankingsContext.Provider>
  );
};
