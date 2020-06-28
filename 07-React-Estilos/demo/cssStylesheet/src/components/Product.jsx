import React from 'react';
import './Product.css'; // global para todo

function Product(props) {
  return (
    <div className="producto">
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
