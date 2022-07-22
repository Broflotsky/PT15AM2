import React from "react";

export default function Species({ species, handleSpecies }) {
  return (
    <div>
      <h2>Species</h2>
      <ul>
        {species.map((specie, key) => (
            <li key={key}>
              <button 
                // onClick={handleSpecies} 
                value={specie} 
                >{specie}</button>
            </li>
          ))}
      </ul>
        
    </div>
  );
}
