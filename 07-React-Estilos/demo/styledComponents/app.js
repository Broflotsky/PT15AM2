import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import GlobalStyles from './src/styles/GlobalStyles.js';

function App() {
  return (
    <>
      <GlobalStyles />
      <Producto title="Prueba" price={400}/>
    </>
  )
}
render(<App />, document.getElementById('app'));
