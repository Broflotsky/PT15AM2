// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes/funciones
import Contact from "../src/components/Contact/Contact";

configure({ adapter: new Adapter() });

describe("04 | Ejercicios", () => {
  let contact, handleSubmit, alert, onSubmit;

  beforeEach(() => {
    contact = shallow(<Contact />);
    handleSubmit = jest.fn();
  });

  beforeAll(() => {
    alert = window.alert;
    window.alert = jest.fn();
  });

  afterAll(() => {
    window.alert = alert;
  });

  it("Debe mostrar un alert 'Debes corregir todos los errores' cuando haya un error en el formulario", () => {
    contact.find("form").simulate("submit", { preventDefault: () => {} });
    expect(window.alert).toHaveBeenCalledWith("Debes corregir los errores");
  });

  it("Debería mostrar un alert 'Datos completos' al hacer submit correctamente", () => {
    contact.find("input[name='name']").simulate("change", {
      target: {
        name: "name",
        value: "Henry",
      },
    });

    contact.find("input[name='email']").simulate("change", {
      target: {
        name: "email",
        value: "henry@gmail.com",
      },
    });

    contact.find("input[name='phone']").simulate("change", {
      target: {
        name: "phone",
        value: 23564200,
      },
    });

    contact.find("textarea[name='message']").simulate("change", {
      target: {
        name: "message",
        value: "Mensaje Henry",
      },
    });

    contact.find("input[name='subject']").simulate("change", {
      target: {
        name: "subject",
        value: "Asunto Henry",
      },
    });

    contact.find("form").simulate("submit", { preventDefault: () => {} });
    expect(window.alert).toHaveBeenCalledWith("Datos completos");
  });

  it("Debería ejecutar e.preventDefault() al hacer submit", () => {
    onSubmit = contact.find("form").prop("onSubmit");
    onSubmit({ preventDefault: handleSubmit });
    expect(handleSubmit).toHaveBeenCalled();
  });
});
