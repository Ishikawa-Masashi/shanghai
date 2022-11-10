import React from 'react';

import classes from './Button.module.scss';

type Props = {
  onClick: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
};

export const Button: React.FC<Props> = (props) => {
  const { onClick, children, style = {} } = props;

  return (
    <div className={classes.button} style={style} onClick={onClick}>
      {children}
    </div>
  );
};
