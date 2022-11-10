import React from 'react';
// import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import './styles.css';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
];

export default function Example() {
  return (
    <Router>
      <></>
    </Router>
  );
}
