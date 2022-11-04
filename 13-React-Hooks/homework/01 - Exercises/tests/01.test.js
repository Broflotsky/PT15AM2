import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ContactUs from "../src/components/ContactUs/ContactUs";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe("01 | Ejercicios", () => {
  let contactUs, useState, useStateSpy;
  const mockStore = configureStore();
  beforeEach(() => {
    //mockeamos useDispatch
    const mockDispatch = jest.fn();
    jest.mock("react-redux", () => ({
        useDispatch: () => mockDispatch,
    }));

    useState = jest.fn();
    useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(() => [
      {
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      },
      useState,
    ]);
    const store = mockStore({})
    contactUs = mount(
      <Provider store={store}>
        <ContactUs />
      </Provider>
    );
    expect(contactUs).toBeTruthy();
  });

  it("El componente ContactUs debe tener un estado local que sea un objeto, con las propiedades nombre, email, asunto y mensaje", () => {
    expect(useStateSpy).toHaveBeenCalledWith({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  });

  it("Dentro del componente ContactUs debería existir una función llamada handleInput que se encargue de manejar el estado", () => {
    let wrapper = contactUs.find("input[name='nombre']").simulate("change", {
      target: {
        value: "Henry",
        name: "nombre",
      },
    });
    expect(useState).toHaveBeenCalledWith({
      nombre: "Henry",
      email: "",
      asunto: "",
      mensaje: "",
    });
    wrapper = contactUs.find("input[name='email']").simulate("change", {
      target: {
        value: "henry@gmail.com",
        name: "email",
      },
    });
    expect(useState).toHaveBeenCalledWith({
      nombre: "",
      email: "henry@gmail.com",
      asunto: "",
      mensaje: "",
    });
    wrapper = contactUs.find("input[name='asunto']").simulate("change", {
      target: {
        value: "Asunto",
        name: "asunto",
      },
    });
    expect(useState).toHaveBeenCalledWith({
      nombre: "",
      email: "",
      asunto: "Asunto",
      mensaje: "",
    });
    wrapper = contactUs.find("input[name='mensaje']").simulate("change", {
      target: {
        value: "Mensaje",
        name: "mensaje",
      },
    });
    expect(useState).toHaveBeenCalledWith({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "Mensaje",
    });
  });
});
