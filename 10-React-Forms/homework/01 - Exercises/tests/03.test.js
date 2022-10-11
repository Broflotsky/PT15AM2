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
          phone: 235642,
          subject: "Asunto Henry",
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
          phone: 235642,
          subject: "Asunto Henry",
          message: "Mensaje Henry",
        })
      ).toEqual({
        email: "Debe ser un correo electrónico",
      });
    });

    it("El teléfono debe ser un número positivo", () => {
      expect(
        validate({
          name: "Henry",
          email: "henry@gmail.com",
          phone: -235642,
          subject: "Asunto Henry",
          message: "Mensaje Henry",
        })
      ).toEqual({
        phone: "Sólo números positivos",
      });

      expect(
        validate({
          name: "Henry",
          email: "henry@gmail.com",
          phone: -31,
          subject: "Asunto Henry",
          message: "Mensaje Henry",
        })
      ).toEqual({
        phone: "Sólo números positivos",
      });
    });

    it("El asunto debe ser obligatorio y no estar vacío", () => {
      expect(
        validate({
          name: "Henry",
          email: "henry@gmail.com",
          phone: 235642,
          subject: "",
          message: "Mensaje Henry",
        })
      ).toEqual({
        subject: "Se requiere un asunto",
      });
    });

    it("El message debe ser obligatorio y no estar vacío", () => {
      expect(
        validate({
          name: "Henry",
          email: "henry@gmail.com",
          phone: 235642,
          subject: "Asunto Henry",
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
          phone: 235642,
          subject: "Asunto Henry",
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

    it("Si el teléfono tiene errores, el input debe tener una clase 'warning'. Cuando estos errores desaparezcan, el input NO debe tener la clase 'warning'", () => {
      // El telefono NO tiene que ser un numero negativo
      contact.find("input[name='phone']").simulate("change", {
        target: {
          name: "phone",
          value: -235642,
        },
      });
      input = contact.find("input[name='phone']");
      expect(input.hasClass("warning")).toBeTruthy();
      // Ahora testeamos que el error desaparezca cuando ingresamos el input correcto
      contact.find("input[name='phone']").simulate("change", {
        target: {
          name: "phone",
          value: 235642,
        },
      });
      input = contact.find("input[name='phone']");
      expect(input.hasClass("warning")).toBeFalsy();
    });

    it("Si el asunto tiene errores, el input debe tener una clase 'warning'. Cuando estos errores desaparezcan, el input NO debe tener la clase 'warning'", () => {
      contact.find("input[name='subject']").simulate("change", {
        target: {
          name: "subject",
          value: "",
        },
      });
      input = contact.find("input[name='subject']");
      expect(input.hasClass("warning")).toBeTruthy();
      // Ahora testeamos que el error desaparezca cuando ingresamos el input correcto
      contact.find("input[name='subject']").simulate("change", {
        target: {
          name: "subject",
          value: "Asunto Henry",
        },
      });
      input = contact.find("input[name='subject']");
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
