import { SIMPLE } from './SIMPLE';
import { SVASTIKA } from './SVASTIKA';
import { TURTLE } from './TURTLE';
import { scorpion } from './scorpion';
import { leopard } from './leopard';
import { monkey } from './monkey';
import { snake } from './snake';
import { crane } from './crane';

export const stages = [
  { name: 'Simple', layout: SIMPLE },
  { name: 'Turtle', layout: TURTLE },
  { name: 'Svastika', layout: SVASTIKA },
  { name: 'Scorpion', layout: scorpion },
  { name: 'Leopard', layout: leopard },
  { name: 'Monkey', layout: monkey },
  { name: 'Snake', layout: snake },
  { name: 'Crane', layout: crane },
];
