import React from 'react';
import { BasicFrame, Button } from '../Elements';
import { Typography } from '../Typography';
import { useAuth } from '../../hooks/useAuth';
import { ordinal } from '../../util';

type Props = {
  rank: number;
  close: () => void;
  successCallback?: () => void;
};

const noop = () => {};

export const SignInAndInputName: React.VFC<Props> = (props) => {
  const { rank, close, successCallback = noop } = props;

  const { loginWithFacebook, loginWithGoogle } = useAuth();
  const onClickFacebook = () => loginWithFacebook(successCallback);
  const onClickGoogle = () => loginWithGoogle(successCallback);

  return (
    <BasicFrame>
      <Typography style={{ padding: 0 }}>{`Your ranking is ${ordinal(
        rank
      )}.`}</Typography>
      <Typography>
        If you want to record your clear time in the ranking, please sign in and
        enter your name.
      </Typography>
      <Button
        onClick={onClickFacebook}
        style={{ margin: '2rem', backgroundColor: '#408d00e0' }}
      >
        <Typography>Sign In with Facebook</Typography>
      </Button>
      <Button
        onClick={onClickGoogle}
        style={{ margin: '2rem', backgroundColor: '#408d00e0' }}
      >
        <Typography>Sign In with Google</Typography>
      </Button>
      <Button onClick={() => close()}>
        <Typography>I don't record clear time.</Typography>
      </Button>
    </BasicFrame>
  );
};
