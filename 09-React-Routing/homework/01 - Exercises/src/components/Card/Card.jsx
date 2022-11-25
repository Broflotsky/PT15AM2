import React from 'react';
import styleCard from './Card.module.css';

export default function Card({ name, image, id }) {
   return (
      <div className={styleCard.container}>
         <h4>{name}</h4>
         <img src={image} alt='' />
      </div>
   );
}
