// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes/funciones
import Contact, { validate } from "../src/components/Contact/Contact";

configure({ adapter: new Adapter() });

describe("03 | Ejercicios", () => {
  let contact, input;
  beforeEach(() => {
    contact = shallow(<Contact />);
  });
  describe("***Función Validate***", () => {
    /* Recordar que los errores deben detallarse exactamente como lo pide el test.
  Es decir, si hay una mayúscula de más, no lo va a tomar */
    it("El nombre debe ser obligatorio y no estar vacío", () => {
      expect(
        validate({
          name: "",
          email: "henry@gmail.com",
          message: "Mensaje Henry",
        })
      ).toEqual({
        name: "Se requiere un nombre",
      });
    });

    it("El email debe coincidir con un formato válido", () => {
      expect(
        validate({
          name: "Henry",
          email: "henry",
          message: "Mensaje Henry",
        })
      ).toEqual({
        email: "Debe ser un correo electrónico",
      });
    });

    it("El message debe ser obligatorio y no estar vacío", () => {
      expect(
        validate({
          name: "Henry",
          email: "henry@gmail.com",
          message: "",
        })
      ).toEqual({
        message: "Se requiere un mensaje",
      });
    });

    it("Si todos los campos son correctos, no debe devolver ningún error", () => {
      expect(
        validate({
          name: "Henry",
          email: "henry@gmail.com",
          message: "Mensaje Henry",
        })
      ).toEqual({});
    });
  });

  describe("***Estilos de errores***", () => {
    it("Si el nombre tiene errores, el input debe tener una clase 'warning'. Cuando estos errores desaparezcan, el input NO debe tener la clase 'warning'", () => {
      contact.find("input[name='name']").simulate("change", {
        target: {
          name: "name",
          value: "",
        },
      });
      input = contact.find("input[name='name']");
      expect(input.hasClass("warning")).toBeTruthy();
      // Ahora testeamos que el error desaparezca cuando ingresamos el input correcto
      contact.find("input[name='name']").simulate("change", {
        target: {
          name: "name",
          value: "Henry",
        },
      });
      input = contact.find("input[name='name']");
      expect(input.hasClass("warning")).toBeFalsy();
    });

    it("Si el email tiene errores, el input debe tener una clase 'warning'. Cuando estos errores desaparezcan, el input NO debe tener la clase 'warning'", () => {
      contact.find("input[name='email']").simulate("change", {
        target: {
          name: "email",
          value: "henry",
        },
      });
      input = contact.find("input[name='email']");
      expect(input.hasClass("warning")).toBeTruthy();
      // Ahora testeamos que el error desaparezca cuando ingresamos el input correcto
      contact.find("input[name='email']").simulate("change", {
        target: {
          name: "email",
          value: "henry@gmail.com",
        },
      });
      input = contact.find("input[name='email']");
      expect(input.hasClass("warning")).toBeFalsy();
    });

    it("Si el mensaje tiene errores, el input debe tener una clase 'warning'. Cuando estos errores desaparezcan, el input NO debe tener la clase 'warning'", () => {
      contact.find("textarea[name='message']").simulate("change", {
        target: {
          name: "message",
          value: "",
        },
      });
      input = contact.find("textarea[name='message']");
      expect(input.hasClass("warning")).toBeTruthy();
      // Ahora testeamos que el error desaparezca cuando ingresamos el input correcto
      contact.find("textarea[name='message']").simulate("change", {
        target: {
          name: "message",
          value: "Mensaje Henry",
        },
      });
      input = contact.find("textarea[name='message']");
      expect(input.hasClass("warning")).toBeFalsy();
    });
  });
});
