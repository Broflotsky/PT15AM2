import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as actions from "../src/redux/actions/actions";
import reducer from "../src/redux/reducer/reducer";
import ContactUs from "../src/components/ContactUs/ContactUs";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe("01 | Ejercicios", () => {
  const mockStore = configureStore();
  describe("Actions", () => {
    it("La action enviarForm debería retornar un objeto con el type y payload de la action", () => {
      expect(actions.enviarForm(undefined)).toEqual({
        type: "FORM_DATA",
        payload: undefined,
      });
      expect(
        actions.enviarForm({
          nombre: "Mateo Hernandez",
          email: "mhernandez@gmail.com",
          asunto: "Postulacion",
          mensaje: "Me gustaria postularme como full stack developer",
        })
      ).toEqual({
        type: "FORM_DATA",
        payload: {
          nombre: "Mateo Hernandez",
          email: "mhernandez@gmail.com",
          asunto: "Postulacion",
          mensaje: "Me gustaria postularme como full stack developer",
        },
      });
    });
  });
  describe("Reducer", () => {
    it("Debería retornar el estado global con el payload agregado cuando el caso es FORM_DATA", () => {
      const state = {
        formulario: {},
      };
      const payload = {
        nombre: "Martin Precelle",
        email: "mprecelle@gmail.com",
        asunto: "Postulacion",
        mensaje: "Me gustaria postularme como full stack developer",
      };
      const firstForm = reducer(state, actions.enviarForm(payload));
      // Recordar que el store de redux no debe mutar!
      expect(firstForm).not.toEqual(state);
      expect(firstForm).toEqual({
        formulario: payload,
      });
    });
    it("Debería retornar el estado cuando el caso es default", () => {
      expect(reducer(undefined, actions.enviarForm({}))).toEqual({
        formulario: {},
      });
    });
  });
  describe("Dispatch enviarForm", () => {
    it("Debería invocarse el hook dispatch para poder despachar la action 'enviarFormulario'", () => {
      const store = mockStore({});
      const contactUs = mount(
        <Provider store={store}>
          <ContactUs />
        </Provider>
      );
      expect(contactUs).toBeTruthy();
      const enviarFormSpy = jest.spyOn(actions, "enviarForm");
      contactUs.find("button").simulate("click");
      expect(enviarFormSpy).toHaveBeenCalled();
      // Ahora la action debería recibir el estado local!
      expect(enviarFormSpy).toHaveBeenCalledWith({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    });
  });
});
