import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';

type Props = React.PropsWithChildren<{ ratio: number }>;

export const AspectRatio = (props: Props) => {
  const { ratio, children } = props;

  const containerRef = React.useRef<HTMLDivElement>(null);
  const objectRef = React.useRef<HTMLDivElement>(null);

  const update = React.useCallback(() => {
    if (containerRef.current && objectRef.current) {
      const isTall =
        containerRef.current.clientWidth / containerRef.current.clientHeight <
        ratio;
      objectRef.current.style.width = isTall ? '100%' : 'auto';
      objectRef.current.style.height = isTall ? 'auto' : '100%';
    }
  }, [ratio]);

  React.useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(containerRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, update]);

  return (
    <Flex w="full" h="full" justify="center" align="center" ref={containerRef}>
      <Box
        ref={objectRef}
        style={{ aspectRatio: ratio }}
        overflow="hidden"
        backgroundImage="/images/6555578_38130.jpg"
        backgroundSize="contain"
      >
        {children}
      </Box>
    </Flex>
  );
};
