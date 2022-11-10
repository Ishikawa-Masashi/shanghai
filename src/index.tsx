import * as React from 'react';
import { createRoot } from 'react-dom/client';

// import ReactDOM from 'react-dom';

import { App } from './components/App';

import './index.scss';

// ReactDOM.render(<App />, document.getElementById('root'));

// import { App } from './App';

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);
