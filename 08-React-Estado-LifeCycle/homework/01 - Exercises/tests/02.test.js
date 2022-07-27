import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import nock from "nock";
import data from "../db.json";
import fetch from "jest-fetch-mock";
// Importamos variables/componentes
import Zoo from "../src/components/Zoo/Zoo";

// jest.mock("../src/components/Animals/Animals", () => () => <></>);

configure({ adapter: new Adapter() });
global.fetch = fetch;

describe("02 | Ejercicios", () => {
  let zoo, useState, useStateSpy, useEffect;

  beforeAll(() => expect(isReact.classComponent(Zoo)).toBeFalsy());

  const mockUseEffect = () => useEffect.mockImplementation((fn) => fn());

  beforeEach(() => {
    // Se Mockea las request a las api
    const apiMock = nock("http://localhost:3001").persist();

    apiMock.get("/animals").reply(200, data.animals);

    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useEffect = jest.spyOn(React, "useEffect");
    useStateSpy.mockImplementation(() => [
      { zooName: "", animals: [], copyAnimals: [], species: [] },
      useState,
    ]);

    zoo = shallow(<Zoo />);
    expect(zoo).toBeTruthy();
    mockUseEffect();
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
        animals: data.animals.animals,
        species: data.animals.species,
        // CopyAnimals lo utilizaremos para no perder el estado al hacer los filtros
        copyAnimals: data.animals.animals,
      });
    }, 300);
  });

  it("El componente Zoo debe pasarle por 'props' al componente Specie, la propiedad species del estado local y la funcion handleSpecies", () => {
    const speciesComponent = zoo.find("Species");
    expect(speciesComponent.prop("species")).toBeTruthy();
    expect(speciesComponent.prop("handleSpecies")).toBeTruthy();
    expect(typeof speciesComponent.prop("handleSpecies")).toEqual("function");
  });

  it("El componente Zoo, debe pasarle por 'props' al componente Animals, la propiedad animals del objeto zoo de su estado local", () => {
    const animalsComponent = zoo.find("Animals");
    expect(animalsComponent.prop("animals")).toBeTruthy();
  });

  afterEach(() => jest.restoreAllMocks());
  afterEach(() => nock.cleanAll());
});
