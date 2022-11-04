import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import nock from "nock";
import data from "../db.json";
import fetch from "node-fetch";
// Importamos variables/componentes
import Zoo from "../src/components/Zoo/Zoo";

configure({ adapter: new Adapter() });
global.fetch = fetch;

describe("02 | Ejercicios", () => {
  let zoo, useState, useStateSpy, useEffect;

  beforeAll(() => expect(isReact.classComponent(Zoo)).toBeFalsy());

  const mockUseEffect = () => useEffect.mockImplementation((fn) => fn());

  beforeEach(() => {
    // Se Mockea las request a las api
    const apiMock = nock("http://localhost:3001").persist();

    apiMock.get("/zoo").reply(200, data.zoo);

    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useEffect = jest.spyOn(React, "useEffect");
    useStateSpy.mockImplementation(() => [
      { zooName: "", animals: [], allAnimals: [], species: [] },
      useState,
    ]);

    zoo = shallow(<Zoo />);
    expect(zoo).toBeTruthy();
    mockUseEffect();
  });

  it("Debería haber un useEffect dentro del componente Zoo", () => {
    expect(useEffect).toHaveBeenCalled();
  });

  it("El componente Zoo debe pasarle por 'props' al componente Species, la propiedad species del estado local y la función handleSpecies", () => {
    const speciesComponent = zoo.find("Species");
    expect(speciesComponent.prop("species")).toBeTruthy();
    expect(speciesComponent.prop("handleSpecies")).toBeTruthy();
    expect(typeof speciesComponent.prop("handleSpecies")).toEqual("function");
  });

  it("El componente Zoo, debe pasarle por 'props' al componente Animals, la propiedad animals del objeto zoo de su estado local", () => {
    const animalsComponent = zoo.find("Animals");
    const propAnimals = animalsComponent.prop("animals");
    expect(propAnimals).toBeTruthy();
    expect(Array.isArray(propAnimals)).toBeTruthy();
  });

  afterEach(() => jest.restoreAllMocks());
  afterEach(() => nock.cleanAll());
});
