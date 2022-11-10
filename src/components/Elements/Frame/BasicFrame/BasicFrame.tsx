import React from 'react';

import styles from './BasicFrame.module.scss';

type Props = {
  backgroundColor?: string;
};

export const BasicFrame: React.FC<Props> = (props) => {
  const { children, backgroundColor = '#1401c1e6' } = props;
  return (
    <div className={styles.BasicFrame} style={{ backgroundColor }}>
      {children}
    </div>
  );
};
