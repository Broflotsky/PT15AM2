import React from 'react'
import s from './Bienvenido.module.css'
import Botones from '../Botones/Botones.jsx'

const studentName = 'Nacho'
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux']
const alerts = { m1: 'Aprobado', m2: 'En curso' }

export default function Bienvenido () {
  return (
    <div className={s.divBienvenido} >
      <h1 className={s.title}>soy Henry!</h1>
      <h3 className={s.subtitle}>{studentName}</h3>
      <ul className={s.unorderedList}>
        {techSkills.map(skill => (
          <li className={s.itemsList} key={skill}>{skill}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  )
}

export { studentName, techSkills, alerts }
