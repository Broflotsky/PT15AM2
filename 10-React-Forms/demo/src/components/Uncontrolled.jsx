import React from 'react';

class Uncontrolled extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const username = document.querySelector('input[name=username]').value;
    const password = document.querySelector('input[name=password]').value;
    console.log(username, password);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="username" placeholder="username ej: toni@gmail.com" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" />
      </form>
    );
  }
}

export default Uncontrolled;