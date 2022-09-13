import { connect } from 'react-redux';
import './card.css';

function Card({ name, price }) {
   return (
      <div className='cardBg'>
         <h5>{name}: </h5>
         <h5>${price}</h5>
         <button className='cardBtn'>X</button>
      </div>
   );
}

function mapDispatchToProps() {
   return {};
}

export default connect(null, mapDispatchToProps)(Card);
