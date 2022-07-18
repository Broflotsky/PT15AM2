import React, { useState, useEffect } from "react";
import Botones from "../Botones/Botones.jsx";
import styles from "./Bienvenido.module.css";

const studentName = "Nombre alumno";
const techSkills = [];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  return (
    <div>
      <h1 style={{ fontStyle: "italic", fontSize: "50px" }}>soy Henry!</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((skill) => (
          <li className={s.itemsList} key={skill}>
            {skill.tech}
            <img src={skill.image} alt={skill.tech} />
          </li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

export { studentName, techSkills, alerts };
