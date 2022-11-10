import React, { FunctionComponent } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const UpperCaseA: FunctionComponent<Props> = (props) => {
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
        <g id="UpperCaseA">
          <path
            d="m0,0h2v1h-1v1h-1zm6,0h2v2h-1v-1h-1zm-3,3h2v1h-2zm0,3h2v2h-2z"
            opacity="0"
          />
          <path
            d="m2,0h3v1h1v1h1v1h-2v-1h-1v-1h-1v1h-1v1h-2v-1h1v-1h1z"
            fill="#f8f8f8"
          />
          <path
            d="m5,0h1v1h1v1h1v6h-3v-1h2v-5h-1v-1h-1zm-2,1h1v1h1v1h-2v1h-1v-2h1zm-1,4h3v1h-2v2h-3v-1h2z"
            fill="#1f1f1f"
          />
          <path d="m0,3h2v1h-2zm5,0h2v1h-2z" fill="#d8e8f8" />
          <path d="m0,4h7v1h-7z" fill="#b0b8e0" />
          <path d="m0,5h2v1h-2zm5,0h2v1h-2z" fill="#98a0c8" />
          <path d="m0,6h2v1h-2zm5,0h2v1h-2z" fill="#8088b0" />
        </g>
      </defs>
      <use xlinkHref="#UpperCaseA" />
    </svg>
  );
};
