import React from 'react';

import './typography.scss';

type Props = React.PropsWithChildren<{ style?: React.CSSProperties }>;

export const Typography: React.FC<Props> = (props) => {
  const { children, style = {} } = props;

  return (
    <div style={style} className="typography">
      {children}
    </div>
  );
};
