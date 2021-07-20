import React from 'react';
import { connect } from 'react-redux';
import './UserPosts.css';

export class UserPosts extends React.Component {

  render() {
   
    return (
      <div className="details">
        <h4 className="title">Posts del usuario {/*userid*/}</h4>
        
      </div>
    )
  }
}


export default UserPosts;