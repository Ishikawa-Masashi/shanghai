import * as React from 'react';

import { Box, BoxProps } from '@chakra-ui/react';

type Props = {
  // text: string;
  strokecolor?: string;
  strokeWidth?: number;
} & BoxProps;

export const SVGText = (props: Props) => {
  const { strokeWidth = 2, strokecolor = '#000', children } = props;
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 75"
        preserveAspectRatio="xMinYMid meet"
        // style="background-color:green"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="transparent" />
        <text
          x="50%"
          y="50%"
          font-size="70"
          fontWeight={700}
          fill="white"
          dominant-baseline="middle"
          text-anchor="middle"
          style={{
            textShadow: `${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, ${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px ${strokeWidth}px 0 ${strokecolor}, -${strokeWidth}px -${strokeWidth}px 0 ${strokecolor}
          `,
          }}
        >
          {children}
        </text>
      </svg>
    </div>
  );
};
