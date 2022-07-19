import React from 'react';
import Botones from '../Botones/Botones.jsx';
import styles from './Bienvenido.module.css';


const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {

  const [studentName, setStudentName] = React.useState('');
  const [tech, setTech] = React.useState([]);

  const handleInputChange = (e)=> {
    setStudentName(e.target.value)
  }

  React.useEffect(()=>{
    
  },[])

  return (
    <div >
      <h1 className={styles.title}>
        soy Henry!
      </h1>
      <label style={{ textAlign:"center" }}>Nombre estudiante:</label>
      <input value={studentName} onChange={handleInputChange}></input>
      <h3 className={styles.subtitle}>{studentName}</h3>
      <ul className={styles.unorderedList} >
        {/* {techSkills.map((skill) => (
          <li className={styles.listItem} key={skill}>
            {skill.tech}
            <img src={skill.image} alt={skill.tech} />
          </li>
        ))} */}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

export { alerts };
