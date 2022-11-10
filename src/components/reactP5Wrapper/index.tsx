// import deepEqual from 'deep-equal';
import p5 from 'p5';
import React, {
  FunctionComponent,
  memo,
  useEffect,
  useState,
  useRef,
} from 'react';
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

export const ReactP5WrapperComponent: FunctionComponent<P5WrapperProps> = (
  props
) => {
  const { sketch, children } = props;
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

  //   useEffect(() => {
  //     instance?.updateWithProps?.(props);
  //   }, [props]);

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
    >
      {children}
    </div>
  );
};

// export const ReactP5Wrapper = memo(
//   ReactP5WrapperComponent,
//   (previousProps: P5WrapperProps, nextProps: P5WrapperProps) => {
//     return deepEqual(previousProps, nextProps, { strict: true });
//   }
// );
