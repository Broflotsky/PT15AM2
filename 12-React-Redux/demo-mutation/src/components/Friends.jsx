import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store.js";
import { addFriend } from "../actions/index.js";

class Friends extends Component {
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

const mapStateToProps = (state) => {
  return {
    count: state.count,
    amigos: state.amigos,
  };
};

export default connect(mapStateToProps, { addFriend })(Friends);
