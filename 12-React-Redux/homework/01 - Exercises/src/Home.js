import React from 'react';
import Products from './components/Products/Products';
import Form from './components/Form/Form';
import './home.css';

export default function Home() {
   return (
      <div className='homeBg'>
         <Products />
         <Form />
      </div>
   );
}
