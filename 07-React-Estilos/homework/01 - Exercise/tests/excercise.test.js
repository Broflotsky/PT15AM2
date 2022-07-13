// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Bienvenido from "../src/components/Bienvenido/Bienvenido.jsx";
import Botones, {
  DivButtons,
  Buttons,
} from "../src/components/Botones/Botones.jsx";

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

  it("Debe utilizarse styled-components para el div, llamándose 'DivButtons'", () => {
    const divBotones = wrapperBotones.find("DivButtons");
    expect(divBotones).toBeTruthy();
  });

  it("Debe utilizarse styled-components para los botones, llamándose 'Buttons'", () => {
    const buttons = wrapperBotones.find("Buttons");
    expect(buttons).toBeTruthy();
  });

  it("'DivButtons' debe tener al menos dos propiedades CSS: 'display: flex' y 'flex-direction: row'", () => {
    const divBotones = shallow(<DivButtons />);
    expect(divBotones).toHaveStyleRule("display", "flex");
    expect(divBotones).toHaveStyleRule("flex-direction", "row");
  });

  it("'Buttons' debe tener al menos dos propiedades CSS: 'border-radius: 5px' y 'color: beige'", () => {
    const buttons = shallow(<Buttons />);
    expect(buttons).toHaveStyleRule("border-radius", "5px");
    expect(buttons).toHaveStyleRule("color", "beige");
  });
});
