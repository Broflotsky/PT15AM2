import React from "react";

export default function Species({ species, handleSpecies }) {
  console.log(species);

  return (
    <div>
      <h2>Species</h2>
        {species.map((specie, key) => (
          <button onClick={handleSpecies} value={specie} key={key}>{specie}</button>
        ))}
    </div>
  );
}
