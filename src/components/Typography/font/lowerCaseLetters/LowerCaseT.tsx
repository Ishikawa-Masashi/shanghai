import React, { FunctionComponent } from 'react';

type Props = {
  width?: number;
  height?: number;
};

export const LowerCaseT: FunctionComponent<Props> = (props) => {
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
        2021 17:47:01 GMT+0900 (日本標準時) path count:7
      </desc>
      <defs>
        <g id="LowerCaseT">
          <path
            d="m0,0h8v8h-3v-3h2v-2h-2v-2h-3v2h-2zm0,5h2v3h-2z"
            opacity="0"
          />
          <path d="m2,1h2v2h-2z" fill="#f8f8f8" />
          <path
            d="m4,1h1v2h-1zm2,2h1v2h-2v3h-3v-1h2v-3h2zm-6,1h2v1h-2z"
            fill="#1f1f1f"
          />
          <path d="m0,3h6v1h-6z" fill="#d8e8f8" />
          <path d="m2,4h2v1h-2z" fill="#b0b8e0" />
          <path d="m2,5h2v1h-2z" fill="#98a0c8" />
          <path d="m2,6h2v1h-2z" fill="#8088b0" />
        </g>
      </defs>
      <use xlinkHref="#LowerCaseT" />
    </svg>
  );
};
