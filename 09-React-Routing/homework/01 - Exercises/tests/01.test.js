// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import App from "../src/App";
import ReactDOM from "react-dom";
// Importamos variables/componentes

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("01 | Ejercicios", () => {
  it("Debería envolver el componente App.js dentro del BrowserRouter", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../src/index.js");
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
  });
});
