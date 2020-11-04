import React from 'react';
import Musico from './Musico.jsx';

export default function Musicos({ musicos }) {
    return (
      <div>
        {
          musicos.map(musico => (
            <Musico name={musico.name} lastname={musico.lastname} band={musico.band} />
          ))
        }
      </div>
    )
};