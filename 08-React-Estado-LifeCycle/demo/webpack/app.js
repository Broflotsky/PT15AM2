import React from 'react';
import { render } from 'react-dom';

import Contador from './src/components/Contador.jsx';
import Main from './src/containers/Main.jsx';

// const element = <h1>Hello, world!</h1>;

// render(element,  document.getElementById('app'));



// class Welcome extends React.Component {
//  render() {
//    return <h1>Hello, {this.props.name}</h1>;
//  }
// }
  
// function WelcomeFuncional(props) {
//   return <h1>Hello, {props.name}</h1>;
// }


// render((<div>
//   <Welcome name="Henry"/>
//   <WelcomeFuncional name="Henry Funcional" />
//   </div>
//  )
//  ,  document.getElementById('app'));


// render(<Contador contador={0}/>, document.getElementById('app'));


const products = [
  { title: 'Uno', price: 1},
  { title: 'Dos', price: 12},
  { title: 'Tres', price: 3},
  { title: 'Cuatro', price: 4},
];

render(<Main products={products}/>, document.getElementById('app'));