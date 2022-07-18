import React, { useState, useEffect } from 'react';
import Botones from '../Botones/Botones.jsx';
import styles from './Bienvenido.module.css';


const alerts = { m1: 'Aprobado', m2: 'En curso' }

export default function Bienvenido () {

  fetch('../../../db.json')
  .then(r => r.json())
  .then((resource)=>{
    if(resource !== undefined) {
      const techSkill = {
        tech
      }
    }
  })
  
  const [studentName, setStudentName] = useState('');
  const [tech, setTech] = useState([])


  const handleInputChange = (e) => {
    setStudentName(e.target.value)
  }
  return (
    <div className={styles.divBienvenido}>
      <h1 className={styles.title}>soy Henry!</h1>
      <label>Nombre Estudiante:</label>
      <input value={studentName} type='text' onChange={handleInputChange}></input>
      <h3 className={styles.subtitle}>{studentName}</h3>
      <ul className={styles.unorderedList}>
        <li></li>
        {/* {techSkills.map(skill => (
          <li className={styles.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
        ))} */}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { alerts }
