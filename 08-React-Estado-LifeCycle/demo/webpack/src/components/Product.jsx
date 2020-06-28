import React from 'react';

function Product(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>$ {props.price}</p>
    </div>
  );
}

export default Product;