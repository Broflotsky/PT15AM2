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
console.warn = jest.fn();

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
    console.warn.mockClear();
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

  it("Componente Card | El componente Link debe tener el atributo 'to' igual a '/cruises/:id'", () => {
    const card = shallow(<Card id={1} />);
    expect(card.find("Link").prop("to")).toBe("/cruises/1");

    const card2 = shallow(<Card id={2} />);
    expect(card2.find("Link").prop("to")).toBe("/cruises/2");

    const card3 = shallow(<Card id={3} />);
    expect(card3.find("Link").prop("to")).toBe("/cruises/3");
  });

  it("Componente CardDetail | Debería llamar a la función useParams y guardar el id", async () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
    mount(
      <MemoryRouter initialEntries={["/cruises/1"]}>
        <CardDetail />
      </MemoryRouter>
    );
    expect(Router.useParams).toHaveBeenCalled();
  });

  it("Componente CardDetail | Debería llamar a la función useNavigate al hacer click y redirigir a '/'", () => {
    const detail = mount(
      <MemoryRouter initialEntries={["/cruises/1"]}>
        <CardDetail />
      </MemoryRouter>
    );
    detail.find("button").simulate("click");
    expect(navigate).toHaveBeenCalledWith("/");
  });

  it("Componente NavBar | Debería renderizar un </NavLink> para redirigir a '/'", () => {
    const navBar = mount(
      <MemoryRouter
        initialEntries={["/", "/cruises/2", "/shipping", "/promotions"]}
      >
        <NavBar />
      </MemoryRouter>
    );
    expect(navBar.find("NavLink").at(0).prop("to")).toBe("/");
  });

  it("Componente NavBar | Debería renderizar un </NavLink> para redirigir a '/shipping'", () => {
    const navBar = mount(
      <MemoryRouter
        initialEntries={["/", "/cruises/2", "/shipping", "/promotions"]}
      >
        <NavBar />
      </MemoryRouter>
    );
    expect(navBar.find("NavLink").at(1).prop("to")).toBe("/shipping");
  });

  it("Componente NavBar | Debería renderizar un </NavLink> para redirigir a '/promotions'", () => {
    const navBar = mount(
      <MemoryRouter
        initialEntries={["/", "/cruises/2", "/shipping", "/promotions"]}
      >
        <NavBar />
      </MemoryRouter>
    );
    expect(navBar.find("NavLink").at(2).prop("to")).toBe("/promotions");
  });

  afterEach(() => jest.restoreAllMocks());
});
