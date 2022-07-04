import React from "react";
import Botones from "./Botones";

const subTitle = "Magic Types";
const magicTypes = [
  "fuego",
  "rayo",
  "aire",
  "metal",
  "veneno",
  "celestial",
  "transformación",
  "elemental",
  "alquímica",
  "escritura",
  "armadura",
  "estelar",
  "hadas",
];

const alerts = {
  ocultar: "Ocultar",
  mostrar: "Mostrar",
};

export default function Bienvenido() {
  return (
    <div>
      <h1>Title</h1>
      <h3>{subTitle}</h3>
      <ul>
        {magicTypes.map((t, k) => (
          <li key={k}>{t}</li>
        ))}
      </ul>
      <Botones alerts={alerts} />
    </div>
  );
}

export { subTitle, magicTypes, alerts };
