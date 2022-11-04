import React from "react";
import "@testing-library/jest-dom/extend-expect";
import data from "../db.json";
import fetch from "node-fetch";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
  configure
} from "@testing-library/react";
import nock from "nock";
// Importamos variables/componentes
import Zoo from "../src/components/Zoo/Zoo";
import Species from "../src/components/Species/Species";

global.fetch = fetch;

// Configuramos testing-library
configure({
  getElementError: (element, message) => {
    const error = new Error(message);
    error.name = "TestingLibraryElementError";
    error.stack = null;
    return error;
  },
});

describe("05 | Ejercicios", () => {
  beforeEach(() => {
    // Se Mockea las request a las api
    const apiMock = nock("http://localhost:3001").persist(true);

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(data.zoo),
      })
    );

    apiMock.get("/zoo").reply(200, data.zoo);
  });

  it("Al hacer click en el botón de la especie 'Mamíferos', debe filtrar el estado que le llega por props a Animals por los animales de esa especie", async () => {
    await act(async () => {
      render(<Species species={[]} />);
      render(<Zoo />);
    });
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Mamíferos" }));
    });
    await waitFor(() => {
      expect(screen.queryByText("Cocodrilo")).toEqual(null);
      expect(screen.queryByText("Delfín")).not.toEqual(null);
      expect(screen.queryByText("León")).not.toEqual(null);
      expect(screen.queryByText("Boa constrictor")).toEqual(null);
      expect(screen.queryByText("Pavo real")).toEqual(null);
    });
  });

  it("Al hacer click en el botón de la especie 'Reptiles', debe filtrar el estado que le llega por props a Animals por los animales de esa especie", async () => {
    await act(async () => {
      render(<Species species={[]} />);
      render(<Zoo />);
    });
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Reptiles" }));
    });
    await waitFor(() => {
      expect(screen.queryByText("Delfín")).toEqual(null);
      expect(screen.queryByText("Cocodrilo")).not.toEqual(null);
      expect(screen.queryByText("Boa constrictor")).not.toEqual(null);
      expect(screen.queryByText("León")).toEqual(null);
      expect(screen.queryByText("Pavo real")).toEqual(null);
    });
  });

  it("Al hacer click en el botón de la especie 'Aves', debe filtrar el estado que le llega por props a Animals por los animales de esa especie", async () => {
    await act(async () => {
      render(<Species species={[]} />);
      render(<Zoo />);
    });
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Aves" }));
    });
    await waitFor(() => {
      expect(screen.queryByText("Cocodrilo")).toEqual(null);
      expect(screen.queryByText("Delfín")).toEqual(null);
      expect(screen.queryByText("León")).toEqual(null);
      expect(screen.queryByText("Boa constrictor")).toEqual(null);
      expect(screen.queryByText("Pavo real")).not.toEqual(null);
    });
  });

  it("Al hacer click en el botón 'All Animals', debe restaurar el listado de animales completo (todas las especies)", async () => {
    await act(async () => {
      render(<Zoo />);
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Aves" }));
    });

    await waitFor(() => {
      expect(screen.queryByText("Cocodrilo")).toEqual(null);
      expect(screen.queryByText("Delfín")).toEqual(null);
      expect(screen.queryByText("León")).toEqual(null);
      expect(screen.queryByText("Boa constrictor")).toEqual(null);
      expect(screen.queryByText("Pavo real")).not.toEqual(null);
    });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "All Animals" }));
    });

    await waitFor(() => {
      expect(screen.queryByText("Cocodrilo")).not.toEqual(null);
      expect(screen.queryByText("Delfín")).not.toEqual(null);
      expect(screen.queryByText("León")).not.toEqual(null);
      expect(screen.queryByText("Boa constrictor")).not.toEqual(null);
      expect(screen.queryByText("Pavo real")).not.toEqual(null);
    });
  });

  afterEach(() => jest.restoreAllMocks());
  afterEach(() => nock.cleanAll());
});
