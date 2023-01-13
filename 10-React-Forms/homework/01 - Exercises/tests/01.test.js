// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Contact from "../src/components/Contact/Contact";

configure({ adapter: new Adapter() });

describe("01 | Ejercicios", () => {
  let contact;
  beforeEach(() => {
    contact = shallow(<Contact />);
  });

  it("Debería renderizar un <form>", () => {
    expect(contact.find("form")).toHaveLength(1);
  });

  it("Debería renderizar un label para el nombre con el texto 'Nombre:'", () => {
    expect(contact.find("label").at(0).text()).toEqual("Nombre:");
  });

  it("Debería renderizar un input para el nombre con los atributos name, placeholder y type", () => {
    const inputName = contact.find("input").at(0);
    expect(inputName.props()).toEqual({
      ...inputName.props(),
      name: "name",
      placeholder: "Escribe tu nombre...",
      type: "text",
    });
  });

  it("Debería renderizar un label para el correo electrónico con el texto 'Correo Electrónico:'", () => {
    expect(contact.find("label").at(1).text()).toEqual("Correo Electrónico:");
  });

  it("Debería renderizar un input para el correo electrónico con los atributos name, placeholder y type", () => {
    const inputEmail = contact.find("input").at(1);
    expect(inputEmail.props()).toEqual({
      ...inputEmail.props(),
      name: "email",
      placeholder: "Escribe tu email...",
      type: "text",
    });
  });

  it("Debería renderizar un label para el mensaje con el texto 'Mensaje:'", () => {
    expect(contact.find("label").at(2).text()).toEqual("Mensaje:");
  });

  it("Debería renderizar un textarea para el mensaje con los atributos name, placeholder y type", () => {
    const inputMessage = contact.find("textarea").at(0);

    expect(inputMessage.props()).toEqual({
      ...inputMessage.props(),
      name: "message",
      placeholder: "Escribe tu mensaje...",
      type: "text",
    });
  });

  it("Debería renderizar un botón con el atributo type que sea submit y con el texto 'Enviar'", () => {
    const button = contact.find("button");
    expect(button.props()).toEqual({
      ...button.props(),
      type: "submit",
    });
    expect(button.text()).toEqual("Enviar");
  });
});
