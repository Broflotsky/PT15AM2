import { connect } from 'react-redux';
import { useState } from 'react';
import Card from '../Card/Card';
import './products.css';

function Products({ list }) {
   const [aux, setAux] = useState('');

   return (
      <div className='productsBg'>
         <h1 className='productsTl'>HENRY MARKET</h1>
         <div className='productsList'>
            {/* ¡Renderiza aquí todas tus cards! */}
            {list &&
               list.length &&
               list.map((pro, i) => {
                  return <Card key={i} name={pro.name} price={pro.price} />;
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
