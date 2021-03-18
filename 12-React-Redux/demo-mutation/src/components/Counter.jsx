import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../store.js';
// import actionCreators from '../actions/index.js'
import { addFriend } from '../actions/index.js';

 //
 // function incrementar() {
 //   store.dispatch(increment());
 // }
 //
 // function decrementar() {
 //   store.dispatch(decrement())
 // }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementar: function () {
//       dispatch(increment());
//     },
//     decrement: function (id) {
//       dispatch(decrement())
//     },
//     reset: function(id) {
//       dispatch(reset());
//     },
//   }
// }


class Counter extends Component {
  render() {
    return (
      <div>
        {
          this.props.amigos && this.props.amigos.map((amigo, i) => (
            <p key={i}>{amigo}</p>
          ))
        }
        <button onClick={this.props.addFriend}>ADD FRIEND TITO</button>
      </div>
    )
  }
}

// class Counter extends Component {
//   render() {
//     return (
//       <p>
//         Clicked: {this.props.count} times
//         {' '}
//         <button onClick={incrementar}>
//           +
//         </button>
//         {' '}
//         <button onClick={decrementar}>
//           -
//         </button>
//         {' '}
//         <button onClick={() => store.dispatch(reset())}>
//           Reset
//         </button>
//       </p>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    count: state.count,
    amigos: state.amigos
  };
}

export default connect(mapStateToProps, {addFriend})(Counter);
