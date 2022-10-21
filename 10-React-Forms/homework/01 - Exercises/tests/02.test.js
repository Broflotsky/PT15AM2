// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes
import Contact from "../src/components/Contact/Contact";

configure({ adapter: new Adapter() });

describe("02 | Ejercicios", () => {
  let contact;
  beforeEach(() => {
    contact = shallow(<Contact />);
  });
  /* Correr estos test una vez hayan terminado de configurar su estado local acorde al README.md, ya que acá se testean los cambios del estado al escribir sobre los input */
  it("Debería asignar la función 'handleChange' al 'onChange' de cada input", () => {
    const inputs = contact.find("input");
    expect(inputs.length).toBeGreaterThan(0);
    inputs.forEach((i) => {
      expect(i.props().onChange).toBeDefined();
      expect(typeof i.props().onChange).toBe("function");
    });
  });

  it("Debería asignar la función 'handleChange' al 'onChange' del textarea", () => {
    const textArea = contact.find("textarea");
    expect(textArea.length).toBe(1);
    expect(typeof textArea.props().onChange).toBe("function");
  });

  it("El form debería cambiar de estado cuando escriban en el input de name", () => {
    expect(contact.find("input[name='name']").prop("value")).toEqual("");
    contact.find("input[name='name']").simulate("change", {
      target: { value: "Henry", name: "name" },
    });
    const inputName = contact.find("input[name='name']");
    expect(inputName.prop("value")).toEqual("Henry");
  });

  it("El form debería cambiar de estado cuando escriban en el input de email", () => {
    expect(contact.find("input[name='email']").prop("value")).toEqual("");
    contact.find("input[name='email']").simulate("change", {
      target: { value: "henry@gmail.com", name: "email" },
    });
    const inputEmail = contact.find("input[name='email']");
    expect(inputEmail.prop("value")).toEqual("henry@gmail.com");
  });

  it("El form debería cambiar de estado cuando escriban en el input de phone", () => {
    expect(contact.find("input[name='phone']").prop("value")).toEqual(0);
    contact.find("input[name='phone']").simulate("change", {
      target: { value: 123456789, name: "phone" },
    });
    const inputPhone = contact.find("input[name='phone']");
    expect(inputPhone.prop("value")).toEqual(123456789);
  });

  it("El form debería cambiar de estado cuando escriban en el input de subject", () => {
    expect(contact.find("input[name='subject']").prop("value")).toEqual("");
    contact.find("input[name='subject']").simulate("change", {
      target: { value: "Subject Input", name: "subject" },
    });
    const inputSubject = contact.find("input[name='subject']");
    expect(inputSubject.prop("value")).toEqual("Subject Input");
  });

  it("El form debería cambiar de estado cuando escriban en el input de message", () => {
    expect(contact.find("textarea[name='message']").prop("value")).toEqual("");
    contact.find("textarea[name='message']").simulate("change", {
      target: { value: "Message Input", name: "message" },
    });
    const inputMessage = contact.find("textarea[name='message']");
    expect(inputMessage.prop("value")).toEqual("Message Input");
  });
});
