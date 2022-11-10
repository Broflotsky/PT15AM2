import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { configure, mount, shallow } from "enzyme";
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
import Promotions from "../src/components/Promotions/Promotions";

jest.mock("../src/components/Home/Home", () => () => <></>);
jest.mock("../src/components/CardDetail/CardDetail", () => () => <></>);
jest.mock("../src/components/Shipping/Shipping", () => () => <></>);
jest.mock("../src/components/NavBar/NavBar", () => () => <></>);

configure({ adapter: new Adapter() });
console.error = jest.fn();
console.warn = jest.fn();

global.fetch = fetch;

describe("02 | Ejercicios", () => {
  let routes;

  beforeEach(() => {
    console.error.mockClear();
    console.warn.mockClear();
    // Se Mockea las request a las api
    const apiMock = nock("http://localhost:3001").persist();

    apiMock.get("/cruises").reply(200, data.cruises);
  });

  routes = ["/", "/cruises/2", "/shipping", "/promotions"];

  const componentToUse = (route) => {
    return (
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );
  };

  it("En App.js debería renderizarse el componente Routes", () => {
    const app = shallow(<App />);
    expect(app.find("Routes")).toHaveLength(1);
  });

  it("El componente Home debería ser renderizado en la ruta /", () => {
    const app = mount(componentToUse(routes[0]));
    expect(app.find(Home)).toHaveLength(1);
    expect(app.find(CardDetail)).toHaveLength(0);
    expect(app.find(Shipping)).toHaveLength(0);
    expect(app.find(Promotions)).toHaveLength(0);
  });

  it("El componente Shipping debería ser renderizado en la ruta /shipping", () => {
    const app = mount(componentToUse(routes[2]));
    expect(app.find(CardDetail)).toHaveLength(0);
    expect(app.find(Home)).toHaveLength(0);
    expect(app.find(Shipping)).toHaveLength(1);
    expect(app.find(Promotions)).toHaveLength(0);
  });

  it("El componente CardDetail debería ser renderizado en la ruta /cruises/:id", () => {
    const app = mount(componentToUse(routes[1]));
    expect(app.find(CardDetail)).toHaveLength(1);
    expect(app.find(Home)).toHaveLength(0);
    expect(app.find(Shipping)).toHaveLength(0);
    expect(app.find(Promotions)).toHaveLength(0);
  });

  it("El componente Promotions debería ser renderizado en la ruta /promotions", () => {
    const app = mount(componentToUse(routes[3]));
    expect(app.find(Promotions)).toHaveLength(1);
    expect(app.find(CardDetail)).toHaveLength(0);
    expect(app.find(Home)).toHaveLength(0);
    expect(app.find(Shipping)).toHaveLength(0);
  });

  it("El componente Routes debe renderizar un Route por cada ruta", () => {
    const app = shallow(<App />);
    const routesChildren = app.find("Routes").children();
    expect(routesChildren).toHaveLength(4);
    routesChildren.forEach((c) => {
      expect(c.props().element).toBeTruthy();
      expect(c.props().path).toBeTruthy();
    });
  });

  it("El componente NavBar debería ser renderizado en todas las rutas", () => {
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
