import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import InfoEnviada from "../src/components/InfoEnviada/InfoEnviada";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe("04 - Ejercicios", () => {
  let useEffect, infoEnviada;
  const mockStore = configureStore();
  beforeEach(() => {
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "",
        nombre: "",
        email: "",
      },
    });
    infoEnviada = mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    useEffect = jest.spyOn(React, "useEffect");
  });

  afterEach(() => jest.restoreAllMocks());

  it("InfoEnviada debe declarar un React.useEffect", () => {
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "",
        nombre: "",
        email: "",
      },
    });
    mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(useEffect).toHaveBeenCalled();
  });

  it("Dentro del React.useEffect(), se deberían setear los valores del estado local con el store de Redux", () => {
    const useStateSpy = jest.spyOn(React, "useState");
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "",
        nombre: "",
        email: "",
      },
    });
    mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(useStateSpy).toHaveBeenCalledWith({
      mensaje: "",
      asunto: "",
      nombre: "",
      email: "",
    });
  });

  it('Debe renderizar una etiqueta "h1" con el text "ESTA ES LA INFORMACIÓN QUE ENVIASTE..."', () => {
    expect(infoEnviada.find("h1").text()).toEqual(
      "ESTA ES LA INFORMACIÓN QUE ENVIASTE..."
    );
  });

  it('Debe renderizar una etiqueta "h3" con el valor de la propiedad "nombre" del estado "informacion"', () => {
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "",
        nombre: "Henry",
        email: "",
      },
    });
    infoEnviada = mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(infoEnviada.find("h3").at(0).text()).toEqual("Henry");
  });

  it('Debe renderizar una etiqueta "h3" con el valor de la propiedad "email" del estado "informacion"', () => {
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "",
        nombre: "",
        email: "sarmiento@hotmail.com",
      },
    });
    infoEnviada = mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(infoEnviada.find("h3").at(1).text()).toEqual(
      "sarmiento@hotmail.com"
    );
  });

  it('Debe renderizar una etiqueta "h3" con el valor de la propiedad "asunto" del estado "informacion"', () => {
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "Postulación TA",
        nombre: "",
        email: "",
      },
    });
    infoEnviada = mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(infoEnviada.find("h3").at(2).text()).toEqual("Postulación TA");
  });

  it('Debe renderizar una etiqueta "h3" con el valor de la propiedad "mensaje" del estado "informacion"', () => {
    const store = mockStore({
      formulario: {
        mensaje: "Considero que soy un persona apta para ser TA",
        asunto: "",
        nombre: "",
        email: "",
      },
    });
    infoEnviada = mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(infoEnviada.find("h3").at(3).text()).toEqual(
      "Considero que soy un persona apta para ser TA"
    );
  });
});
