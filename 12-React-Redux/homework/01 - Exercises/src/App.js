import React from 'react';
import ProductList from './components/ProductList';

export default function App() {
   const [input, setInput] = React.useState('');

   function handleChange(e) {
      e.preventDefault();
      setInput();
   }

   function handleAddList(e) {}

   return (
      <div>
         <ProductList />
         {/* <label>Ingresa un item:</label>
      <input value={input} onChange={handleChange} />
      <button>Agregar</button>
      <button></button> */}
      </div>
   );
}
