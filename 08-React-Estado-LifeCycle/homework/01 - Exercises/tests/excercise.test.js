// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
// Importamos variables/componentes
import Bienvenido from "../src/components/Bienvenido/Bienvenido";
import Botones from "../src/components/Botones/Botones";

configure({ adapter: new Adapter() });

describe("01 | Componente 'Bienvenido'", () => {
  let bienvenido, useState, useStateSpy;

  beforeAll(() => expect(isReact.classComponent(Bienvenido)).toBeFalsy());

  beforeEach(() => {
    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => ["", useState]);

    bienvenido = shallow(<Bienvenido />);
  });

  it("Debe renderizar el componente 'Bienvenido'", () => {
    expect(bienvenido).toBeTruthy();
  });

  it("Debería inicializar el estado con un string vacío", () => {
    /* Los hooks de React si o si los tenes que usar como "React.useState". El test no los reconoce cuando se hace destructuring de estos métodos. */
    expect(useStateSpy).toHaveBeenCalledWith("");
  });

  it("Debería renderizar una etiqueta label debajo de la etiqueta h1", () => {
    expect(bienvenido.childAt(0).type()).toBe("h1");
    expect(bienvenido.childAt(1).type()).toBe("label");
    expect(bienvenido.childAt(1).text()).toBe("Nombre Estudiante:");
  });

  it("Debería renderizar un input entre la etiqueta label y la etiqueta h3", () => {
    expect(bienvenido.childAt(1).type()).toBe("label");
    expect(bienvenido.childAt(2).type()).toBe("input");
    expect(bienvenido.childAt(3).type()).toBe("h3");
  });

  it("La etiqueta input debe tener una propiedad 'value'", () => {
    expect(bienvenido.childAt(2).prop("value")).not.toBe(null || undefined);
  });

  it("La etiqueta input debe tener una propiedad 'onChange'", () => {
    expect(bienvenido.childAt(2).prop("onChange")).not.toBe(null || undefined);
  });

  it("La etiqueta input debe tener una propiedad 'value' con el valor del estado 'studentName'", () => {
    expect(bienvenido.childAt(2).prop("value")).toBe(useStateSpy()[0]);
  });

  it("Debería reconocer cambios en el estado", () => {
    bienvenido.find("input").simulate("change", {
      target: { value: "Martín" },
    });
    expect(useState).toHaveBeenCalledWith("Martín");
  });

  afterEach(() => jest.restoreAllMocks());
});

describe("02 | Componente 'Botones'", () => {
  beforeAll(() => expect(isReact.classComponent(Botones)).toBeTruthy());
});
