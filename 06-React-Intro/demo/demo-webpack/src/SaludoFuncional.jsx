import React from 'react';

export default function SaludoFuncional(props) {
  const saludo = props.lang === 'es' ? 'Hola' : 'Hello'
  return (
    <h1>{saludo}! {props.nombre}</h1>
  )
};
