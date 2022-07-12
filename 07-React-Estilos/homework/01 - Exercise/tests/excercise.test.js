// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Bienvenido from "../src/components/Bienvenido/Bienvenido.jsx";
import Botones from "../src/components/Botones/Botones.jsx";

configure({ adapter: new Adapter() });

describe("01 | Componente 'Bienvenido'", () => {
  const wrapperBienvenido = shallow(<Bienvenido />);

  it("Renderiza el componente", () => {
    expect(wrapperBienvenido).toBeTruthy();
  });

  it("La etiqueta div debe contener una clase llamada 'divBienvenido'", () => {
    const divBienvenido = wrapperBienvenido.find("div");
    expect(divBienvenido.hasClass("divBienvenido")).toBe(true);
  });

  it("La etiqueta h1 debe contener una clase llamada 'title'", () => {
    const h1 = wrapperBienvenido.find("h1");
    expect(h1.hasClass("title")).toBe(true);
  });

  it("La etiqueta h3 debe contener una clase llamada 'subtitle'", () => {
    const h3 = wrapperBienvenido.find("h3");
    expect(h3.hasClass("subtitle")).toBe(true);
  });

  it("La etiqueta ul debe contener una clase llamada 'unorderedList'", () => {
    const ul = wrapperBienvenido.find("ul");
    expect(ul.hasClass("unorderedList")).toBe(true);
  });

  it("Las etiquetas li debe contener una clase llamada 'listItem'", () => {
    const ul = wrapperBienvenido.find("ul");
    const li = ul.find("li");
    console.log(li.at(0).props().className);
    expect(li.at(0).props().className).toBe("itemsList");
    expect(li.at(1).props().className).toBe("itemsList");
    expect(li.at(2).props().className).toBe("itemsList");
    expect(li.at(3).props().className).toBe("itemsList");
    expect(li.at(4).props().className).toBe("itemsList");
  });
});

describe("02 | Componente 'Botones'", () => {
  const wrapperBotones = shallow(<Botones />);

  it("Renderiza el componente", () => {
    expect(wrapperBotones).toBeTruthy();
  });

  it("La etiqueta div debe contener una clase llamada 'divBotones'", () => {
    const divBotones = wrapperBotones.find("div");
    expect(divBotones.hasClass("divBotones")).toBe(true);
  });

  it("Las etiquetas button deben contener una clase llamada 'buttons'", () => {
    const button = wrapperBotones.find("button");
    expect(button.at(0).props().className).toBe("buttons");
    expect(button.at(1).props().className).toBe("buttons");
  });
  
});
