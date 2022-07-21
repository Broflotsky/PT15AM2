// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import nock from "nock";
import data from "../db.json";
// Importamos variables/componentes
import fetch from "jest-fetch-mock";
import Zoo from "../src/components/Zoo/Zoo";
import Animales from "../src/components/Animales/Animales";

configure({ adapter: new Adapter() });
global.fetch = fetch;

describe("01 | Componente 'Zoo'", () => {
  let zoo, useState, useStateSpy, useEffect;

  beforeAll(() => expect(isReact.classComponent(Zoo)).toBeFalsy());

  const mockUseEffect = () => useEffect.mockImplementation((fn) => fn());

  beforeEach(() => {
    // Se Mockea las request a las api
    const apiMock = nock("http://localhost:3001").persist();

    apiMock.get("/animals").reply(201, data.animals);

    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useEffect = jest.spyOn(React, "useEffect");
    useStateSpy.mockImplementation(() => [
      { zooName: "", animals: [] },
      useState,
    ]);

    zoo = shallow(<Zoo />);
    mockUseEffect();
  });

  it("Debe renderizar el componente 'Zoo'", () => {
    expect(zoo).toBeTruthy();
  });

  it("Debería inicializar el estado con un objeto que contenga una propiedad zoo inicializada como un string vacío y una propiedad animals inicializada como un array vacío", () => {
    /* Los hooks de React si o si los tenes que usar como "React.useState". El test no los reconoce cuando se hace destructuring de estos métodos. */
    expect(useStateSpy).toHaveBeenCalledWith({ zooName: "", animals: [] });
  });

  it("Debería renderizar una etiqueta label debajo de la etiqueta h1", () => {
    expect(zoo.childAt(0).type()).toBe("h1");
    expect(zoo.childAt(1).type()).toBe("label");
    expect(zoo.childAt(1).text()).toBe("Nombre de zoo:");
  });

  it("Debería renderizar un input entre la etiqueta label y la etiqueta h3", () => {
    expect(zoo.childAt(1).type()).toBe("label");
    expect(zoo.childAt(2).type()).toBe("input");
    expect(zoo.childAt(3).type()).toBe("h3");
  });

  it("La etiqueta input debe tener una propiedad 'value'", () => {
    expect(zoo.childAt(2).prop("value")).not.toBe(null || undefined);
  });

  it("La etiqueta input debe tener una propiedad 'onChange'", () => {
    expect(zoo.childAt(2).prop("onChange")).not.toBe(null || undefined);
  });

  it("La etiqueta input debe tener una propiedad 'value' con el valor del estado 'zooName'", () => {
    expect(zoo.childAt(2).prop("value")).toBe(useStateSpy()[0].zooName);
  });

  it("Debería reconocer cambios en el estado", () => {
    const input = zoo.find("input");
    input.simulate("change", {
      target: { value: "Martín's Zoo" },
    });
    expect(useState).toHaveBeenCalledWith({
      zooName: "Martín's Zoo",
      animals: [],
    });

    input.simulate("change", {
      target: { value: "Mate's Zoo" },
    });

    expect(useState).toHaveBeenCalledWith({
      zooName: "Mate's Zoo",
      animals: [],
    });

    input.simulate("change", {
      target: { value: "Auri's Zoo" },
    });

    expect(useState).toHaveBeenCalledWith({
      zooName: "Auri's Zoo",
      animals: [],
    });
  });

  it("Debería haber un useEffect dentro del componente Zoo", () => {
    expect(useEffect).toHaveBeenCalled();
  });

  it("Debería cargar el estado 'animals' al realizar la request a la api", () => {
    // Timeout para darle tiempo a la promesa de resolverse
    setTimeout(() => {
      expect(useEffect).toHaveBeenCalled();
      expect(useState).toHaveBeenCalledWith({
        zooName: "",
        animals: data.animals,
      });
    }, 100);
  });

  // it('El componente Bienvenido, debe pasarle por "props" al componente Botones, el objeto alerts', () => {
  //   const componentBotones = wrapperBienvenido.find("Botones");
  //   expect(componentBotones.prop("alerts"));
  //   expect(Object.keys(componentBotones.prop("alerts")).length).toBe(2);
  // });

  it("El componente Zoo, debe pasarle por 'props' al componente Animales, la propiedad animals del objeto zoo de su estado local", () => {
    const componenteAnimales = zoo.find("Animales");
    console.log(zoo.find("Animals").debug())
  });

  afterEach(() => {
    nock.cleanAll()
    jest.restoreAllMocks()
  });
});

describe("02 | Componente 'Animales'", () => {
  beforeAll(() => expect(isReact.classComponent(Animales)).toBeTruthy());
});
