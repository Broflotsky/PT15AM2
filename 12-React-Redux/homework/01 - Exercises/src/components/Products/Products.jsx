import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import './products.css';

function Products({ list }) {
   const [aux, setAux] = useState('');

   // useEffect(() => {});

   return (
      <div className='productsBg'>
         <h1 className='productsTl'>HENRY MARKET</h1>

         <div className='productsList'>
            {/* ¡Renderiza aquí todas tus cards! */}
            {list &&
               list.length &&
               list.map((pro, i) => {
                  return (
                     <Card
                        key={i}
                        name={pro.name}
                        price={pro.price}
                        id={pro.id}
                     />
                  );
               })}
         </div>
         <button className='productsBtn' onClick={() => setAux(Date.now())}>
            REFRESH
         </button>
      </div>
   );
}

function mapStateToProps(state) {
   return {
      list: state.list,
   };
}

export default connect(mapStateToProps, null)(Products);
