import { connect } from 'react-redux';
import { deleteProduct } from '../../redux/actions/actions';
import './card.css';

function Card({ name, price, id, deleteProduct }) {
   function handleDelete() {
      deleteProduct(id);
   }

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

function mapDispatchToProps(dispatch) {
   return {
      deleteProduct: (id) => {
         dispatch(deleteProduct(id));
      },
   };
}

export default connect(null, mapDispatchToProps)(Card);
