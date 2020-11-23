import React from 'react';
import { render } from 'react-dom';

import Contador from './src/components/Contador.jsx';
import Main from './src/containers/Main.jsx';

render(<Contador contador={0}/>, document.getElementById('app'));

const products = [
  { title: 'Uno', price: 1},
  { title: 'Dos', price: 12},
  { title: 'Tres', price: 3},
  { title: 'Cuatro', price: 4},
];

// render(<Main products={products}/>, document.getElementById('app'));