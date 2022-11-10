import React, { FunctionComponent } from 'react';

import './character.scss';

type Props = {
  value: string;
};
export const Character: FunctionComponent<Props> = (props) => {
  const { value } = props;
  return (
    <div className="character">
      <div className={value}></div>
    </div>
  );
};
