import React, { FunctionComponent } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const LowerCaseR: FunctionComponent<Props> = (props) => {
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
        2021 17:42:50 GMT+0900 (日本標準時) path count:7
      </desc>
      <defs>
        <g id="LowerCaseR">
          <path d="m0,0h8v8h-5v-2h1v-1h3v-3h-3v1h-1v-1h-3z" opacity="0" />
          <path d="m0,2h2v1h-2zm4,0h2v1h-2z" fill="#f8f8f8" />
          <path
            d="m2,2h1v2h3v-2h1v3h-3v1h-1v2h-3v-1h2v-2h1v-1h-1z"
            fill="#1f1f1f"
          />
          <path d="m0,3h2v1h-2zm3,0h3v1h-3z" fill="#d8e8f8" />
          <path d="m0,4h3v1h-3z" fill="#b0b8e0" />
          <path d="m0,5h2v1h-2z" fill="#98a0c8" />
          <path d="m0,6h2v1h-2z" fill="#8088b0" />
        </g>
      </defs>
      <use xlinkHref="#LowerCaseR" />
    </svg>
  );
};
