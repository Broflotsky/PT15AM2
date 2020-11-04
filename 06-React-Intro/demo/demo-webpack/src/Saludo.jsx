import React from 'react';

export default class Saludo extends React.Component {
  render() {
    const saludo = this.props.lang === 'es' ? 'Hola' : 'Hello';
    return (
      <h1>{saludo}! {this.props.nombre}</h1>
    )
  };
};
