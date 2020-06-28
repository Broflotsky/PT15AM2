import React from 'react';
import './otroCSS.css'; // global para todo

function OtroComponente(props) {
  return (
    <div className="producto">
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default OtroComponente;
