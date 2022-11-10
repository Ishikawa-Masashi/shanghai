import React from 'react';

import { BrowserRouter, Route, Link, NavLink, Routes } from 'react-router-dom';

import { Game } from '../../../pages/Game';

import Contact from '../../example/pages/contact';
import { Title } from '../../../pages/Title';

import { LoginUserProvider } from '../../../providers/LoginUserProvider';
import { RankingsProvider } from '../../../providers/RankingsProvider';

import './screen.scss';
import { SettingsProvider } from '../../../contexts/settings';

const routes = [
  { path: '/', name: 'Title', Component: Title },
  { path: '/game', name: 'Game', Component: Game },
  { path: '/contact', name: 'Contact', Component: Contact },
];

export const Screen = () => {
  return (
    <SettingsProvider>
      <RankingsProvider>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </RankingsProvider>
    </SettingsProvider>
  );
};
