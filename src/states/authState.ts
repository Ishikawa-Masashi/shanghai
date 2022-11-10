import {
  atom,
  useAtom,
  useAtomWithSelector,
} from '@ishikawa-masashi/react-atomic-state';
import { User } from 'firebase/auth';

export type UserInfo = {
  stages: Record<string, { time: number; date: string }[]>;
};

const initialState = {
  loginUser: null as User | null,
  userInfo: { stages: {} } as UserInfo,
};

const authState = atom(initialState);

export const setLoginUser = (loginUser: User) =>
  authState.set((state) => ({ ...state, loginUser }));

export const setUserInfo = (userInfo: UserInfo) =>
  authState.set((state) => ({ ...state, userInfo }));

export const useLoginUser = () =>
  useAtomWithSelector(authState, (state) => state.loginUser);

export const useUserInfo = () =>
  useAtomWithSelector(authState, (state) => state.userInfo);
