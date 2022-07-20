import React from 'react';
import Animales from '../Animales/Animales';
import styles from './Zoo.module.css';

export default function Bienvenido() {

  const [zooName, setZooName] = React.useState('');
  const [animals, setAnimals] = React.useState([]);

  const handleInputChange = (e)=> {
    setZooName(e.target.value)
  }

  React.useEffect(()=>{
    //fetch --> especies --> 
  },[])

  return (
    <div >
      <h1 className={styles.title}>
        Mi Zoo!
      </h1>
      <label style={{ textAlign:"center" }}>Nombre de zoo:</label>
      <input value={zooName} onChange={handleInputChange}></input>
      <h3 className={styles.subtitle}>{zooName}</h3>
      <ul className={styles.unorderedList} >
        {/* {techSkills.map((skill) => (
          <li className={styles.listItem} key={skill}>
            {skill.tech}
            <img src={skill.image} alt={skill.tech} />
          </li>
        ))} */}
      </ul>
      <Animales />
    </div>
  );
}


