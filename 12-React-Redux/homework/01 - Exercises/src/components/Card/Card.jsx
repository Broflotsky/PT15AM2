import React from 'react';
import { connect } from 'react-redux';
import './card.css';

export class Card extends React.Component{
   constructor(props){
      super(props)
   }

   render(){
      return (
         <div className='cardBg'>
            <h5>{this.props.name}: </h5>
            <h5>${this.props.price}</h5>
            <button className='cardBtn'>X</button>
         </div>
      )
   };
};

export function mapDispatchToProps() {}

export default connect(null, mapDispatchToProps)(Card);
