import React, { FunctionComponent } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const LowerCaseL: FunctionComponent<Props> = (props) => {
  const { width = 8, height = 8 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      buffered-rendering="static"
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0,0,6,8"
    >
      <defs>
        <g id="LowerCaseL">
          <path d="m0,0h6v8h-1v-7h-4v2h1v5h-2z" opacity="0" />
          <path d="m1,1h3v2h-2v-1h-1z" fill="#f8f8f8" />
          <path d="m4,1h1v7h-3v-1h2zm-3,1h1v1h-1z" fill="#1f1f1f" />
          <path d="m2,3h2v1h-2z" fill="#d8e8f8" />
          <path d="m2,4h2v1h-2z" fill="#b0b8e0" />
          <path d="m2,5h2v1h-2z" fill="#98a0c8" />
          <path d="m2,6h2v1h-2z" fill="#8088b0" />
        </g>
      </defs>
      <use xlinkHref="#LowerCaseL" />
    </svg>
  );
};
