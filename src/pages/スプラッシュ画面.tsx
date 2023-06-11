import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';
import { Box } from '@chakra-ui/react';

const animationKeyframes = keyframes`
  0%{ opacity: 1; }
  100% { opacity: 0; }
`;

const animation = `${animationKeyframes} 3s linear forwards`;

export const スプラッシュ画面 = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    // const state = main(stage.layout);
    // setBoard(state.board);
    // setRest(state.rest);
    setTimeout(() => {
      navigate('/puzzle-select');
    }, 3000);
  }, []);

  return (
    <Box
      // as={motion.div}
      // animation={animation}
      // position="fixed"
      // top="0"
      // bottom="0"
      // left="0"
      // right="0"
      w="full"
      h="full"
      // backgroundColor="black"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box fontSize="100px" as={motion.div} animation={animation} color="white">
        Mahjong Solitaire
      </Box>
    </Box>
  );
};
