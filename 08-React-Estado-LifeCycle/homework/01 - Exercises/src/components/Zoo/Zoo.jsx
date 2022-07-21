import React from "react";
import Animals from "../Animals/Animals";
import styles from "./Zoo.module.css";

export default function Bienvenido() {
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: []
  });

  const handleInputChange = (e) => {
    setZoo({
      ...zoo,
      zooName: e.target.value,
    });
  };

  function changeAnimals (specie) {
    setZoo({
      ...zoo,
      animals: zoo.animals.filter((a) => a.specie === specie)
    })
  }

  React.useEffect(() => {
    fetch("http://localhost:3001/animals")
      .then((res) => res.json())
      .then((data) => setZoo({ ...zoo, animals: data.animals, species: data.species }))
      .catch((error) => console.log(error));
  }, []);

  console.log(zoo.animals)
  return (
    <div>
      <h1 className={styles.title}>Mi Zoo!</h1>
      <label>Nombre de Zoo:</label>
      <input value={zoo.zooName} onChange={handleInputChange}></input>
      <h3 className={styles.subtitle}>{zoo.zooName}</h3>
      <ul className={styles.unorderedList}>
        {zoo.species?.map((specie, key) => (
          <li className={styles.listItem} key={key}>
            <button onClick={() => changeAnimals(specie)}>Filtrar por {specie}</button>
          </li>
        ))}
      </ul>
      <Animals animals={zoo.animals} />
    </div>
  );
}
