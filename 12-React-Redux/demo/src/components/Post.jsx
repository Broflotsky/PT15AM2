import React from 'react';
import axios from 'axios';
import * as actionCreators from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Post = ({ loading, post, fetchPost }) =>  (
  <div>
      <input name='id' />
      <button onClick={(e) => {
        e.preventDefault();
        const value = document.querySelector('input').value;
        fetchPost(value);
      }} >
        get
      </button>
      <div>
        {loading ? 'loading...' : post.title}
      </div>
    </div>
)

function mapStateToProps(state) {
  return {
    post: state.post,
    loading: state.loading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);