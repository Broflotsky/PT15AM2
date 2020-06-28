import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import './src/global.gcss';

render(<Producto title="Prueba" price={400}/>, document.getElementById('app'));
