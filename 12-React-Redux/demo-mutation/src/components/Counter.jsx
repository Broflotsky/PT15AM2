import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store.js";
// import {increment, decrement, reset } from '../actions/index.js'
import { addFriend } from "../actions/index.js";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.amigos &&
          this.props.amigos.map((amigo, i) => <p key={i}>{amigo}</p>)}
        <button onClick={this.props.addFriend}>ADD FRIEND TITO</button>
      </div>
    );
  }
}

// class Counter extends Component {
//   render() {
//     return (
//       <p>
//         Clicked: {this.props.count} times
//         {' '}
//         <button onClick={this.props.incrementar}>
//           +
//         </button>
//         {' '}
//         <button onClick={this.props.decrementar}>
//           -
//         </button>
//         {' '}
//         <button onClick={this.props.reset}>
//           Reset
//         </button>
//       </p>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    count: state.count,
    amigos: state.amigos,
  };
};

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementar: function () {
//       dispatch(increment());
//     },
//     decrement: function () {
//       dispatch(decrement())
//     },
//     reset: function() {
//       dispatch(reset());
//     },
//   }
// }

export default connect(mapStateToProps, { addFriend })(Counter);
