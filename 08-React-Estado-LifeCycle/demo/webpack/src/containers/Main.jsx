import React from 'react';
import Product from '../components/Product.jsx';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: this.props.products};
  };
  render(){
    console.log(this.state)
    return this.state.products.map(p => <Product title={p.title} price={p.price} />)
  }
};

export default Grid;