import React from 'react';

import classes from './Typography.module.scss';

type Props = React.PropsWithChildren<{ style?: React.CSSProperties }>;

export const Typography: React.FC<Props> = (props) => {
  const { children, style = {} } = props;

  return (
    <div style={style} className={classes.typography}>
      {children}
    </div>
  );
};
