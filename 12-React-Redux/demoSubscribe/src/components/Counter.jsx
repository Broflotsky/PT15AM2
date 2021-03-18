import React, { Component } from 'react';
import store from '../store.js';
// Import para actions separadas
import {increment, decrement, reset} from '../actions/index.js'
// Import para las actions todas juntas
import * as actionCreators from '../actions/index.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Opcción 1:
//  - Valores: Acceder directamente al store desde el componente
//  - Actions: Despachar directo desde el componente

class Counter extends Component {
 constructor() {
   super();
   this.state = { count: 0 };
 }

 componentDidMount() {
   this.unsubscribeStore = store.subscribe(() => {
     this.setState({
       count: store.getState().count
     });
   });
 }

 componentWillUnmount() {
   this.unsubscribeStore();
 };

 render() {
   return (
     <p>
       Clicked: {this.state.count} times
       <button onClick={() => store.dispatch(increment())}>
         +
       </button>
       <button onClick={() => store.dispatch(decrement())}>
         -
       </button>
       <button onClick={() => store.dispatch(reset())}>
         Reset
       </button>
     </p>
   )
 }
}

export default Counter;

// Opción 2A: Utilizar la función connect de 'react-redux'
//  - Valores: Utilizar mapStateToProps
//  - Actions: Pasar directamente las actions creators como segundo
//    parámetro del connect y acceder a ellas mediante props del componente
// IMPORTANTE: Hay un error común en el cual cuando quieren
// despachar las actions colocan directamente el nombre sin
// accederlo desde las props.
// Ejemplo: <button onClick={increment}>

// class Counter extends Component {
//  render() {
//    return (
//      <p>
//        Clicked: {this.props.count} times
//        <button onClick={this.props.increment}>
//          +
//        </button>
//        <button onClick={this.props.decrement}>
//          -
//        </button>
//        <button onClick={this.props.reset}>
//          Reset
//        </button>
//      </p>
//    )
//  }
// }
//
// function mapStateToProps(state) {
//   return {
//     count: state.count
//   };
// }

// export default connect(
//   mapStateToProps,
//   {increment, decrement, reset}
// )(Counter);

// Opción 2B:
//  - Actions: Utilizar mapDispatchToProps y acceder a ellas mediante props del componente

// La parte del componente queda igual, solo modificaremos el connect:

// function mapDispatchToProps(dispatch) {
//     return {
//     increment: function() {
//       dispatch(increment());
//     },
//     decrement: function() {
//       dispatch(decrement())
//     },
//     reset: function() {
//       dispatch(reset());
//     },
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

// Opción 2C:
//  - Solo modificaremos el mapDispatchToProps para traer todas las actions
//  creators de una sin tener que especificar una por una. Para ello utilizaremos
//  el método bindActionCreators de 'redux'

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);
