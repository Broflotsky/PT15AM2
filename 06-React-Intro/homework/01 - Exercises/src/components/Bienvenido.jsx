import React from 'react'

const studentName = 'Nacho'
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux']
const alerts = {}

export default function Bienvenido () {
  return (
    <div>
      <h1>soy Henry!</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export { studentName, techSkills, alerts }
