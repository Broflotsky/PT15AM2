import React, { useState } from 'react';
import { connect } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';

class Form extends React.Component{
   constructor(props){
      super(props)

      this.state = {
         name: "",
         price: "",
         id: ""
      }
   }

   handleInputChange = (event) => {
      this.setState({ ...this.state, [event.target.name]: event.target.value });
   }

   render(){
      return (
         <form className='formBg'>
            <div className='inputBox'>
               <label>Nombre: </label>
               <input
                  name='name'
                  onChange={this.handleInputChange}
                  value={this.state.name}
               />
            </div>
            <div className='inputBox'>
               <label>Precio:</label>
               <input
                  type='number'
                  name='price'
                  onChange={this.handleInputChange}
                  value={this.state.price}
               />
            </div>
            <button className='formBtn'>¡ADD!</button>
            <img src={Caja} alt='' className='logo' />
         </form>
      )
   }
}

export function mapDispatchToProps() {}

export default connect(null, mapDispatchToProps)(Form);
