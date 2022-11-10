import React, { FunctionComponent } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const LowerCaseU: FunctionComponent<Props> = (props) => {
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
      <desc>
        This file was created by
        http://www.h2.dion.ne.jp/~defghi/img2svg3/dot2svg3.htm at Mon Nov 22
        2021 17:35:55 GMT+0900 (日本標準時) path count:7
      </desc>
      <defs>
        <g id="LowerCaseU">
          <path d="m0,0h8v2h-3v4h-2v-4h-3zm0,7h1v1h-1z" opacity="0" />
          <path d="m0,2h2v1h-2zm5,0h2v1h-2z" fill="#f8f8f8" />
          <path
            d="m2,2h1v4h-1zm5,0h1v6h-7v-1h-1v-1h1v1h4v-1h1v1h1z"
            fill="#1f1f1f"
          />
          <path d="m0,3h2v1h-2zm5,0h2v1h-2z" fill="#d8e8f8" />
          <path d="m0,4h2v1h-2zm5,0h2v1h-2z" fill="#b0b8e0" />
          <path d="m0,5h2v1h-2zm5,0h2v1h-2z" fill="#98a0c8" />
          <path d="m1,6h4v1h-4zm5,0h1v1h-1z" fill="#8088b0" />
        </g>
      </defs>
      <use xlinkHref="#LowerCaseU" />
    </svg>
  );
};
