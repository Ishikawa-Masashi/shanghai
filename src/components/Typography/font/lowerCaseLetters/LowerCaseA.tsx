import React, { FunctionComponent } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const LowerCaseA: FunctionComponent<Props> = (props) => {
  const { width = 8, height = 8 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      buffered-rendering="static"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0,0,8,8"
    >
      <defs>
        <g id="LowerCaseA">
          <path d="m0,0h6v1h-2v2h-2v-2h-2z" fill="#f8f8f8" />
          <path d="m6,0h1v2h-2v6h-3v-1h2v-6h2zm-6,1h2v1h-2z" fill="#1f1f1f" />
          <path d="m7,0h1v8h-3v-6h2zm-7,2h2v6h-2z" opacity="0" />
          <path d="m2,3h2v1h-2z" fill="#d8e8f8" />
          <path d="m2,4h2v1h-2z" fill="#b0b8e0" />
          <path d="m2,5h2v1h-2z" fill="#98a0c8" />
          <path d="m2,6h2v1h-2z" fill="#8088b0" />
        </g>
      </defs>
      <use xlinkHref="#LowerCaseA" />
    </svg>
  );
};
