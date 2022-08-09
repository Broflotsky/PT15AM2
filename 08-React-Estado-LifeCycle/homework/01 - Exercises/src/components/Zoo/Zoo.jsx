import React from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";

export default function Zoo() {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(
    () => {
      fetch("http://localhost:3001/zoo")
        .then((res) => res.json())
        .then((data) =>
          setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
          })
        )
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    []
  );

  function handleInputChange(e) {
    setZoo({
      ...zoo,
      zooName: e.target.value,
    });
  }

  const handleSpecies = (e) => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(
        (a) => a.specie.toLowerCase() === e.target.value.toLowerCase()
      ),
    });
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };
  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <div>
        <Species
          species={zoo.species}
          handleSpecies={handleSpecies}
          handleAllSpecies={handleAllSpecies}
        />
        <Animals animals={zoo.animals} />
      </div>
    </div>
  );
}
