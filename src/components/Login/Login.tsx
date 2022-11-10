import React from 'react';
import { VFC, memo, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../Elements';
import { Typography } from '../Typography';

import classes from './Login.module.scss';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginWithFacebook, loginWithGoogle } = useAuth();

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => login(email, password);
  const onClickFacebook = () => loginWithFacebook();
  const onClickGoogle = () => loginWithGoogle();

  return (
    <div className={classes.container}>
      <div className="auth-box">
        <Typography>Login</Typography>
        <Button onClick={onClickFacebook} style={{ margin: '2rem' }}>
          <Typography>Sign In with Facebook</Typography>
        </Button>
        <Button onClick={onClickGoogle} style={{ margin: '2rem' }}>
          <Typography>Sign In with Google</Typography>
        </Button>
      </div>
    </div>
  );
};
