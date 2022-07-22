import React from "react";
import Animals from "../Animals/Animals";
import Species from "../Species/Species";
import styles from "./Zoo.module.css";

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    copyAnimals: [],
    species: [],
  });

  React.useEffect(() => {
    fetch("http://localhost:3001/animals")
      .then((res) => res.json())
      .then((data) =>
        setZoo({ ...zoo, animals: data.animals, copyAnimals: data.animals, species: data.species })
      )
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (e) => {
    setZoo({
      ...zoo,
      zooName: e.target.value,
    });
  };

  const handleSpecies = (e) => {
    setZoo({
      ...zoo,
      animals: [...zoo.copyAnimals].filter((animal) => animal.specie === e.target.value),
    });
  };

  return (
    <div>
      <h1 className={styles.title}>Mi Zoo!</h1>
      <label>Nombre de Zoo:</label>
      <input
        className={styles.input}
        value={zoo.zooName}
        onChange={handleInputChange}
      ></input>
      <h3 className={styles.subtitle}>{zoo.zooName}</h3>
      <div className={styles.containerComponents}>
        <Species species={zoo.species} handleSpecies={handleSpecies} />
        <Animals animals={zoo.animals} />
      </div>
    </div>
  );
}
