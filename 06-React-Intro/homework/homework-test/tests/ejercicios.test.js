import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Bienvenido from "../components/Bienvenido.jsx";

describe("<Bienvenido/>", () => {
  const component = render(<Bienvenido />);

  test("Debería renderizar el componente", () => {
    expect(component).toBeTruthy();
  });
});

/*
Ejercicio 1

la constante saludo debe devolver un div.
El div debe contener una etiqueta h1
El div debe contener una etiqueta p
El div debe contener una lista desordenada
El div debe contener en lista el arreglo tipoMagia

Ejercicio 2
La constante --- debe devolver un elemento div
div debe tener una clase ---
*/
