import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { configure, mount } from "enzyme";
import { act } from "react-dom/test-utils";
import fetch from "node-fetch";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import nock from "nock";
import data from "../db.json";

// Importamos variables/componentes
import App from "../src/App";
import Home from "../src/components/Home/Home";
import CardDetail from "../src/components/CardDetail/CardDetail";
import Shipping from "../src/components/Shipping/Shipping";
import NavBar from "../src/components/NavBar/NavBar";

jest.mock("../src/components/NavBar/NavBar", () => () => <></>);
jest.mock("../src/components/Shipping/Shipping", () => () => <></>);
jest.mock("../src/components/CardDetail/CardDetail", () => () => <></>);

configure({ adapter: new Adapter() });

global.fetch = fetch;

describe("02 | Ejercicios", () => {
  let routes;

  beforeEach(() => {
    // Se Mockea las request a las api
    const apiMock = nock("http://localhost:3001").persist();

    apiMock.get("/cruises").reply(200, data.cruises);
  });

  routes = ["/", "/card/2", "/shipping", "/promotions"];

  const componentToUse = (route) => {
    return (
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
  };

  it("El componente NavBar debería ser renderizado en todas las rutas", () => {
    act(() => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(NavBar)).toHaveLength(1);
      const app2 = mount(componentToUse(routes[1]));
      expect(app2.find(NavBar)).toHaveLength(1);
      const app3 = mount(componentToUse(routes[2]));
      expect(app3.find(NavBar)).toHaveLength(1);
      const app4 = mount(componentToUse(routes[3]));
      expect(app4.find(NavBar)).toHaveLength(1);
    });
  });
});
