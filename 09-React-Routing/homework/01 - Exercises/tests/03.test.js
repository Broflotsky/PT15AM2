import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { configure, mount, shallow } from "enzyme";
import fetch from "node-fetch";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import nock from "nock";
import data from "../db.json";
import Router from "react-router-dom";

// Importamos variables/componentes
import Card from "../src/components/Card/Card";
import CardDetail from "../src/components/CardDetail/CardDetail";
import NavBar from "../src/components/NavBar/NavBar";

// Configuramos Enzyme y limpiamos sus mensajes de error
configure({ adapter: new Adapter() });
console.error = jest.fn();

// Configuramos fetch
global.fetch = fetch;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

describe("03 | Ejercicios", () => {
  let useEffect;
  const mockUseEffect = () => useEffect.mockImplementation(() => jest.fn());
  const navigate = jest.fn();
  beforeEach(() => {

    console.error.mockClear();

    let id;

    const apiMock = nock("http://localhost:3001").persist();

    apiMock.get("/cruises").reply(200, data.cruises);

    apiMock
      .get((uri) => {
        id = Number(uri.split("/").pop());
        return !!id;
      })
      .reply(200, (uri, requestBody) => {
        return data.cruises.find((cruise) => cruise.id === id) || {};
      });

    jest.spyOn(Router, "useNavigate").mockImplementation(() => navigate);

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
  });

  it("Componente Card | Envuelve todo el código dentro del componente Link que importaste previamente desde react-router-dom", () => {
    const card = shallow(<Card />);
    expect(card.find("Link")).toHaveLength(1);
  });

  it("Componente CardDetail | Deberia llamar a la funcion useParams y guardar el id", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    mount(
      <MemoryRouter initialEntries={["/cruises/1"]}>
        <CardDetail />
      </MemoryRouter>
    );
    expect(Router.useParams).toHaveBeenCalled();
  });

  it("Componente CardDetail | Deberia llamar a la funcion useNavigate al hacer click y redirigir a '/'", () => {
    const detail = mount(
      <MemoryRouter initialEntries={["/cruises/1"]}>
        <CardDetail />
      </MemoryRouter>
    );
    detail.find("button").simulate("click");
    expect(navigate).toHaveBeenCalledWith("/");
  });

  it("Componente NavBar | Deberia renderizar un </NavLink> para redirigir a '/'", () => {
    const navBar = mount(
      <MemoryRouter initialEntries={["/", "/cruises/2", "/shipping", "/promotions"]}>
        <NavBar />
      </MemoryRouter>
    )
    const homeLink = navBar.find("NavLink").at(0);
    expect(homeLink).toBeDefined();
    expect(homeLink.prop("to")).toBe("/");
  });

  it("Componente NavBar | Deberia renderizar un </NavLink> para redirigir a '/shipping'", () => {
    const navBar = mount(
      <MemoryRouter initialEntries={["/", "/cruises/2", "/shipping", "/promotions"]}>
        <NavBar />
      </MemoryRouter>
    )
    const shippingLink = navBar.find("NavLink").at(1);
    expect(shippingLink).toBeDefined();
    expect(shippingLink.prop("to")).toBe("/shipping");
  });

  it("Componente NavBar | Deberia renderizar un </NavLink> para redirigir a '/promotions'", () => {
    const navBar = mount(
      <MemoryRouter initialEntries={["/", "/cruises/2", "/shipping", "/promotions"]}>
        <NavBar />
      </MemoryRouter>
    )
    const promotionsLink = navBar.find("NavLink").at(2);
    expect(promotionsLink).toBeDefined();
    expect(promotionsLink.prop("to")).toBe("/promotions");
  });

  afterEach(() => jest.restoreAllMocks());
});
