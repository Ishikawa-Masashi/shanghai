// import deepEqual from 'deep-equal';
import p5 from 'p5';
import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
// import { useIsomorphicEffect } from 'rooks';

export interface SketchProps {
  [key: string]: any;
}

export interface Sketch {
  (instance: P5Instance): void;
}

export interface P5WrapperProps extends SketchProps {
  sketch: Sketch;
}

export interface P5Instance extends p5 {
  updateWithProps?: (props: SketchProps) => void;
}

function createCanvas(sketch: Sketch, container: HTMLDivElement): P5Instance {
  return new p5(sketch, container);
}

type Props = React.PropsWithChildren<P5WrapperProps>;

export const ReactP5WrapperComponent = (props: Props) => {
  const { sketch } = props;
  const wrapper = useRef<HTMLDivElement>(null);
  const [instance, setInstance] = useState<P5Instance>();

  useEffect(() => {
    return () => {
      instance?.remove();
    };
  }, []);

  useEffect(() => {
    if (wrapper.current === null) {
      return;
    }

    instance?.remove();
    const canvas = createCanvas(sketch, wrapper.current);
    setInstance(canvas);
  }, [sketch, wrapper]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        pointerEvents: 'none',
      }}
      ref={wrapper}
    />
  );
};
