import { connect } from 'react-redux';
import React from 'react';
import './products.css';
// import Card from '../Card/Card'

export function Products() {
   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'></h1>

            <div className='productsList'>
               {/* ¡Renderiza aquí todas tus cards! */}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps() {}

export function mapDispatchToProps() {}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
