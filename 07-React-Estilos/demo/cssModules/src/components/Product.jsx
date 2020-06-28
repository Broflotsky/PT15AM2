import React from 'react';
import s from  './Product.css';


function Product(props) {
  console.log('esto es s:', s);
  return (
    <div className={`${s.producto} ${s.hola}`}>
      <h3 className={s.hola}>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}

export default Product;
