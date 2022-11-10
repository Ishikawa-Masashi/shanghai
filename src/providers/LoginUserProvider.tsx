import React from 'react';
import { Dispatch, ReactNode, SetStateAction } from 'react';
import { UserCredential, onAuthStateChanged, getAuth } from 'firebase/auth';
import { onSnapshot, doc, getDoc } from '@firebase/firestore';
import { useEffect } from 'react';
import { db } from '../plugins/firebase';

export type UserInfo = {
  stages: Record<string, { time: number; date: string }[]>;
};

export type LoginUser = UserCredential['user'];

export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
  userInfo: UserInfo;
};

export const LoginUserContext = React.createContext({} as LoginUserContextType);

export const useLoginUserContext = () => React.useContext(LoginUserContext);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = React.useState<LoginUser | null>(null);
  const [loading, setLoading] = React.useState(true);

  const [userInfo, setUserInfo] = React.useState<UserInfo>({ stages: {} });

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (loginUser) => {
      setLoginUser(loginUser);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!loginUser) {
      return;
    }
    const onMountAsync = async () => {
      const ref = doc(db, 'users', loginUser.uid);
      const docSnap = await getDoc(ref);
      if (docSnap.exists()) {
        // Convert to City object
        // const city = docSnap.data();
        setUserInfo(docSnap.data() as UserInfo);
        // Use a City instance method
        // console.log(docSnap.toString());
      } else {
        console.log('No such document!');
      }

      const unsub = onSnapshot(ref, (doc) => {
        console.log('Current data: ', doc.data());
        setUserInfo(doc.data() as UserInfo);
      });
    };
    onMountAsync();
  }, [loginUser]);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser, userInfo }}>
      {children}
    </LoginUserContext.Provider>
  );
};
