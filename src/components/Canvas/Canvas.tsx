import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

type Props = {
  sketch: any;
};

export const Canvas = (props: Props) => {
  const { sketch } = props;

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new p5(sketch);
  }, [sketch]);

  return <div ref={divRef} />;
};
