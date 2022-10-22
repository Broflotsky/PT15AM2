import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CopyData from "../src/components/CopyData/CopyData";

configure({ adapter: new Adapter() });

describe("05 | Ejercicios", () => {
  let copyData;
  beforeEach(() => {
    copyData = shallow(<CopyData />);
  });

  afterEach(() => jest.restoreAllMocks());

  it("Debe declarar un estado local que sea inicializado en un string", () => {
    const phoneRegex = /([0-9]{3})-([0-9]{3})-([0-9]{4})/;
    const useStateSpy = jest.spyOn(React, "useState");
    shallow(<CopyData />);
    expect(useStateSpy).toHaveBeenCalled();
    // NOTA: el estado local debe tener si o si el formato XXX-XXX-XXXX sino el test fallara
    expect(phoneRegex.test(useStateSpy.mock.calls[0])).toEqual(true);
  });

  it("Debe invocar y guardar en una variable el valor del hook React.useRef()", () => {
    const useRefSpy = jest.spyOn(React, "useRef");
    shallow(<CopyData />);
    expect(useRefSpy).toHaveBeenCalled();
  });

  it('Debe renderizar una etiqueta button con el text "Copy"', () => {
    expect(copyData.find("button").text()).toEqual("Copy");
  });

  it('Debe renderizar un div con la propiedad "ref" haciendo referencia a useRef, con el texto "TELEFONO + <estadoLocal>"', () => {
    const useStateSpy = jest.spyOn(React, "useState");
    shallow(<CopyData />);
    expect(
      copyData
        .find("div")
        .at(2)
        .props()
        .children.join("")
        .includes(useStateSpy.mock.calls[0])
    ).toEqual(true);
  });

  it('El button debe recibir dentro del evento "onClick", la función "handleCopy"', () => {
    expect(copyData.find("button").props().onClick).toBeInstanceOf(Function);
  });
});
