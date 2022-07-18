import React, { useState } from 'react'
import Botones from '../Botones/Botones.jsx'
import htmlImg from '../../assets/html.png'
import cssImg from '../../assets/css.svg'
import javascriptImg from '../../assets/javascript.png'
import reactImg from '../../assets/react.png'
import redux from '../../assets/redux.png'
import styles from './Bienvenido.module.css'


const techSkills = [{ tech: 'Html', image: htmlImg }, { tech: 'Css', image: cssImg }, { tech: 'JavaScript', image: javascriptImg }, { tech: 'React', image: reactImg }, { tech: 'Redux', image: redux }]
const alerts = { m1: 'Aprobado', m2: 'En curso' }

export default function Bienvenido () {
  
  const [studentName, setStudentName] = useState('');
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
        {techSkills.map(skill => (
          <li className={styles.listItem} key={skill}>{skill.tech}<img src={skill.image} alt={skill.tech} /></li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { techSkills, alerts }
