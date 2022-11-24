import { connect } from 'react-redux';
import React from 'react';
import './products.css';
//El componente Card lo exportamos haciendo destructuring para poder testearlo
<<<<<<< HEAD
import Card from '../Card/Card';
=======
// import Card from '../Card/Card'
>>>>>>> 2846d7132b453d58b995d882cf04c05ec3347805

export function Products() {
   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>HENRY MARKET</h1>

            <div className='productsList'>
               {/* ¡Renderiza aquí todas tus cards! */}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps() {}

export default connect(mapStateToProps, null)(Products);
