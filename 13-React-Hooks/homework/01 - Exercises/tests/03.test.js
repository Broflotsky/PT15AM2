import React from "react";
import * as ReactRedux from "react-redux";
import "@testing-library/jest-dom/extend-expect";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import InfoEnviada from "../src/components/InfoEnviada/InfoEnviada";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

describe("03 | Ejercicios", () => {
  const mockStore = configureStore();
  let useState, useStateSpy;
  it("Debería invocar el hook useSelector", () => {
    const store = mockStore({
      formulario: {
        mensaje: "",
        asunto: "",
        nombre: "",
        email: "",
      },
    });
    const useSelectorSpy = jest.spyOn(ReactRedux, "useSelector");
    mount(
      <Provider store={store}>
        <InfoEnviada />
      </Provider>
    );
    expect(useSelectorSpy).toHaveBeenCalled();
  });
  it("Debería guardar los datos del store en un estado local", () => {
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
});
