import React, { FunctionComponent } from 'react';

import './label.scss';

type Props = {
  text: string;
};

export const Label: FunctionComponent<Props> = (props) => {
  const { text } = props;
  return <div className={`stage-label ${text}`} />;
};
