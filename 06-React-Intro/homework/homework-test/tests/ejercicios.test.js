import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Bienvenido from "../src/components/Bienvenido.jsx";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("<Bienvenido />", () => {
  it("Renderiza el componente", () => {
    shallow(<Bienvenido />);
  });

  
  it("Debe renderizar el titulo correcto con un tag h1", () => {
    const saludo = "Bienvenidos a la magia";
    
    const wrapper = shallow(<Bienvenido />);
    expect(wrapper.find("h1").text()).toEqual(saludo);
  });

  it("Debe renderizar los tipos de magia correctos en una lista desordenada", () => {
    const tiposMagia = [
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
  
    const wrapper = shallow(<Bienvenido />);
    expect(wrapper.find("ul").children().length).toEqual(tiposMagia.length);
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
