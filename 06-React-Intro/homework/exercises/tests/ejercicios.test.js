//Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//Importamos variables/componentes
import Bienvenido, {
  subTitle,
  magicTypes,
} from "../src/components/Bienvenido.jsx";
import Botones from "../src/components/Botones.jsx";

configure({ adapter: new Adapter() });

describe("React-Intro tests", () => {
  const wrapperBienvenido = shallow(<Bienvenido />);
  const divBienvenido = wrapperBienvenido.find("div");

  const wrapperBotones = shallow(<Botones />);
  const divBotones = wrapperBotones.find("div");

  it("Renderiza el componente ", () => {
    expect(wrapperBienvenido).toBeTruthy();
  });

  it("Debe contener una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(divBienvenido).toHaveLength(1);
  });

  it("Debe renderizar el titulo con un tag 'h1'", () => {
    const h1 = divBienvenido.find("h1");
    expect(h1.length).toBe(1);
  });

  it("Debe renderizar una etiqueta 'h3'", () => {
    const h3 = divBienvenido.find("h3");
    expect(h3.length).toBe(1);
    expect(h3.text()).toBe(subTitle);
  });

  it("Debe renderizar una etiqueta 'ul'", () => {
    const ul = divBienvenido.find("ul");
    expect(ul.length).toBe(1);
  });

  it("El arreglo tiposMagia debe contener al menos 5 elementos", () => {
    expect(magicTypes.length).toBeGreaterThanOrEqual(5);
  });

  it("Debe renderizar una etiqueta li por cada tipo de magia", () => {
    const ul = divBienvenido.find("ul");
    const li = ul.find("li");
    magicTypes.length > 5
      ? expect(li.length).toBe(magicTypes.length)
      : expect(li.length).toBe(5);
  });

  it("Dentro del componente Bienvenido, debe renderizar un componente Botones", () => {
    const botones = divBienvenido.find("Botones");
    expect(botones.length).toBe(1);
  });

  it("Dentro del componente Botones, debe renderizar una única etiqueta 'div' que contenga todo lo demás", () => {
    const divBotones = wrapperBotones.find("div");
    expect(divBotones).toHaveLength(1);
  });

  it("Dentro del componente Botones, debe renderizar dos botones", () => {
    const botones = divBotones.find("button");
    expect(botones.length).toBe(2);
  });

  it("Dentro del componente Botones, el primer botón debe tener el texto 'Ocultar'", () => {
    const botones = divBotones.find("button");
    expect(botones.first().text()).toBe("Ocultar");
  });

  it("Dentro del componente Botones, el segundo botón debe tener el texto 'Mostrar'", () => {
    const botones = divBotones.find("button");
    expect(botones.last().text()).toBe("Mostrar");
  });

  it("Los botones deben tener un evento onClick que ejecuten una función que muestre un alert con un texto aleatorio", () => {
    const botones = divBotones.find("button");
    botones.forEach((boton) => {
      expect(boton.props().onClick).toBeInstanceOf(Function);
    });
  });
});