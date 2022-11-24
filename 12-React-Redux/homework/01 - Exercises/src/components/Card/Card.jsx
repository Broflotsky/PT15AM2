import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct } from '../../redux/actions/actions';
import './card.css';

export function Card({ name, price, id, deleteProduct }) {
   const handleDelete = (e) => {
      e.preventDefault();
      deleteProduct(id);
   };

   return (
      <div className='cardBg'>
         <h5>{name}: </h5>
         <h5>${price}</h5>
         <button className='cardBtn' onClick={handleDelete}>
            X
         </button>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      deleteProduct: (id) => {
         dispatch(deleteProduct(id));
      },
   };
}

export default connect(null, mapDispatchToProps)(Card);
