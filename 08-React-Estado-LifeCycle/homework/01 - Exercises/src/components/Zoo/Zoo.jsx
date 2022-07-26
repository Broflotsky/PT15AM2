import React from 'react'
import Animals from '../Animals/Animals'
import Species from '../Species/Species'
import styles from './Zoo.module.css'

export default function Zoo () {
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: '',
    animals: [],
    species: [],
    copyAnimals: []
  });
console.log(zoo.species)
  React.useEffect(() => {
    fetch("http://localhost:3001/animals")
      .then((res) => res.json())
      .then((data) =>
        setZoo({ ...zoo, 
        animals: data.animals, 
        species: data.species, 
        copyAnimals:data.animals })
      )
      .catch((error) => console.log(error));
  },[])

  function handleInputChange(e){
    setZoo({
      zooName:e.target.value
    })
  }

  function handleSpecies(e){

  }


  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange}/>
      <h1>{zoo.zooName}</h1>
      <div >
        <Species species={zoo.species} handleSpecies={handleSpecies}/>
        {/* <Animals animals={zoo.animals}/> */}
      </div>
    </div>
  )
}
