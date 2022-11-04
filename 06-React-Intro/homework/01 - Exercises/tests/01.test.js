// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Bienvenido, {
  studentName,
  techSkills,
} from "../src/components/Bienvenido.jsx";

configure({ adapter: new Adapter() });

describe('01 | Componente "Bienvenido"', () => {
  const wrapperBienvenido = shallow(<Bienvenido />);
  const divBienvenido = wrapperBienvenido.find("div");

  it("Renderiza el componente ", () => {
    expect(wrapperBienvenido).toBeTruthy();
  });

  it("Debe contener una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(divBienvenido).toHaveLength(1);
  });

  it("Debe renderizar el tíulo con un tag 'h1'", () => {
    const h1 = divBienvenido.find("h1");
    expect(h1.length).toBe(1);
  });

  it("Debe renderizar una etiqueta 'h3' en donde su texto corresponda a la constante 'studentName'", () => {
    const h3 = divBienvenido.find("h3");
    expect(h3.length).toBe(1);
    expect(h3.text()).toBe(studentName);
  });

  it("Debe renderizar una etiqueta 'ul'", () => {
    const ul = divBienvenido.find("ul");
    expect(ul.length).toBe(1);
  });

  it("Debe renderizar una etiqueta li por cada tech skill", () => {
    const ul = divBienvenido.find("ul");
    const li = ul.find("li");
    techSkills.length > 5
      ? expect(li.length).toBe(techSkills.length)
      : expect(li.length).toBe(5);
  });
});
