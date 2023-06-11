import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from '../pages/Layout';
import { Title } from '../pages/Title';
import { main } from '../mahjongSolitaire';
import { setBoard, setRest, useStage } from '../states/gameState';
import { Game } from '../pages/Game';
import { スプラッシュ画面 } from '../pages/スプラッシュ画面';

export const App = () => {
  const stage = useStage();

  React.useEffect(() => {
    const state = main(stage.layout);

    setBoard(state.board);
    setRest(state.rest);
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          {/* <Route index element={<スプラッシュ画面 />} /> */}
          <Route path="/" element={<Layout />}>
            {/* <Route index element={<スプラッシュ画面 />} /> */}
            {/* <Route path="puzzle-select" element={<Title />} /> */}
            <Route index element={<Title />} />
            <Route path="game" element={<Game />} />
            {/* <Route path="clear" element={<ClearScreen />} /> */}
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
