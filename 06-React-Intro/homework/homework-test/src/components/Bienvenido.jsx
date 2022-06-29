import React from "react";

export const saludo = "Hola Magicos";
export const tiposMagia = [
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

export default function Bienvenido() {
  return (
    <div>
      <h1>{saludo}</h1>
      <p>Tipos de magia:</p>
      <ul>
        {tiposMagia.map((t, k) => (
          <li key={k}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
