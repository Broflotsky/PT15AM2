//Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//Importamos variables/componentes
import Bienvenido from "../src/components/Bienvenido.jsx";
import { saludo, tiposMagia } from "../src/components/Bienvenido.jsx";

configure({ adapter: new Adapter() });

describe("<Bienvenido />", () => {
  const wrapper = shallow(<Bienvenido />);
  const div = wrapper.find("div");

  it("Renderiza el componente", () => {
    expect(wrapper).toBeTruthy();
  });

  it("Debe contener una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(div).toHaveLength(1);
  });

  it("Debe renderizar el titulo con un tag 'h1'", () => {
    const h1 = div.find("h1");
    expect(h1.length).toBe(1);
    expect(h1.text()).toBe(saludo);
  });

  it("Debe renderizar una etiqueta 'p'", () => {
    const p = div.find("p");
    expect(p.length).toBe(1);
  });

  it("Debe renderizar una etiqueta 'ul'", () => {
    const ul = div.find("ul");
    expect(ul.length).toBe(1);
  });

  it("El arreglo tiposMagia debe contener al menos 5 elementos", () => {
    expect(tiposMagia.length).toBeGreaterThanOrEqual(5);
  });

  it("Debe renderizar una etiqueta li por cada tipo de magia", () => {
    const ul = div.find("ul");
    const li = ul.find("li");
    tiposMagia.length > 5
      ? expect(li.length).toBe(tiposMagia.length)
      : expect(li.length).toBe(5);
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
