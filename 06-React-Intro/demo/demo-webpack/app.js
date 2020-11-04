import React from 'react';
import ReactDOM from 'react-dom';
import Musicos from './src/Musicos.jsx';
import Saludo from './src/Saludo.jsx';
import SaludoFuncional from './src/SaludoFuncional.jsx';

const musicos = [
  {
    name: 'John',
    lastname: 'Lennon',
    band: 'The Beatles'
  },
  {
    name: 'David',
    lastname: 'Gilmour',
    band: 'Pink Floyd'
  },
  {
    name: 'Tom',
    lastname: 'Yorke',
    band: 'Radiohead'
  }
];

function App() {
  return (
    <div>
      <Saludo nombre='Soy Henry' lang='en'/>
      <SaludoFuncional nombre='Soy Henry' lang='es'/>
      <Musicos musicos={musicos} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('app'));