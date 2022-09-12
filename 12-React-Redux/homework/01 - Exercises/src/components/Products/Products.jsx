import { connect } from 'react-redux';
import Card from '../Card/Card';
import './products.css';

function Products() {
   return (
      <div className='productsBg'>
         <h1 className='productsTl'>HENRY MARKET</h1>
         <div className='productsList'>
            {/* ¡Renderiza aquí todas tus cards! */}
         </div>
         <button className='productsBtn'>REFRESH</button>
      </div>
   );
}

function mapStateToProps() {
   return {};
}
export default connect(mapStateToProps, null)(Products);
