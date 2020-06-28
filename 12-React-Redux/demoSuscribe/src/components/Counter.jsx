import React, { Component } from 'react';
import store from '../store.js';
import actionCreators from '../actions/index.js'

 // 
 function incrementar() {
   store.dispatch(increment());
 }

 function decrementar() {
   store.dispatch(decrement())
 }

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

function mapDispatchToProps(dispatch) {
  return {
    incrementar: function () {
      dispatch(increment());
    },
    decrement: function (id) {
      dispatch(decrement())
    },
    reset: function(id) {
      dispatch(reset());
    },
  }
}


class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  
  componentDidMount() {
    this.unsubscribeStore = store.subscribe(() => {
      this.setState({
        count: store.getState().count;
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
        {' '}
        <button onClick={incrementar}>
          +
        </button>
        {' '}
        <button onClick={decrementar}>
          -
        </button>
        {' '}
        <button onClick={() => store.dispatch(reset())}>
          Reset
        </button>
      </p>
    )
  }  
}

export default Counter;