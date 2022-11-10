import * as React from 'react';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../plugins/firebase';
import {
  setLoginUser,
  setUserInfo,
  useLoginUser,
  UserInfo,
} from '../states/authState';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

import { db } from '../plugins/firebase';

const noop = () => {};

export const useAuth = () => {
  const loginUser = useLoginUser();

  React.useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (loginUser) => {
      if (loginUser) {
        setLoginUser(loginUser);
      }
      //   setLoading(false);
    });
  }, []);

  React.useEffect(() => {
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

  const login = React.useCallback(
    (email: string, password: string) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
          setLoginUser(user);
        })
        .catch((err) => {
          alert(err);
        });
    },
    [setLoginUser]
  );

  const loginWithFacebook = React.useCallback(
    (
      successCallback: () => void = noop,
      failureCallback: () => void = noop
    ) => {
      const fbProvider = new FacebookAuthProvider();
      signInWithPopup(auth, fbProvider)
        .then((result) => {
          const user = result.user;
          // console.log(user);
          setLoginUser(user);
          successCallback();
        })
        .catch((err) => {
          alert(err);
          failureCallback();
        });
    },
    [setLoginUser]
  );

  const loginWithGoogle = React.useCallback(
    (
      successCallback: () => void = noop,
      failureCallback: () => void = noop
    ) => {
      const googleProvider = new GoogleAuthProvider();
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          // console.log(user);
          setLoginUser(user);
          successCallback();
        })
        .catch((err) => {
          alert(err);
          failureCallback();
        });
    },
    [setLoginUser]
  );

  const register = React.useCallback(
    (email: string, password: string) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoginUser(user);
          // navigate('/');
        })
        .catch((err) => {
          alert(err);
        });
    },
    [setLoginUser]
  );

  const logout = React.useCallback(() => {
    signOut(auth);
  }, []);

  return {
    login,
    loginWithFacebook,
    register,
    logout,
    loginWithGoogle,
    loginUser,
  };
};
