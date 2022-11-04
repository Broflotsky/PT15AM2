// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
// Importamos variables/componentes/funciones
import Connect, { mapDispatchToProps } from "../src/components/Card/Card";
import { render, fireEvent, configure } from "@testing-library/react";
const Card = Connect.WrappedComponent;

configure({
  getElementError: (message) => {
    const error = new Error(message);
    error.name = "HomeworkError";
    error.stack = null;
    return error;
  },
});

describe("05 | Ejercicios", () => {
  it("mapDispatchToProps debería retornar un objeto con la action deleteProduct y despacharla", () => {
    const dispatch = jest.fn();
    const { deleteProduct } = mapDispatchToProps(dispatch);
    expect(deleteProduct).toBeDefined();
    expect(typeof deleteProduct).toEqual("function");
    deleteProduct();
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: "DELETE_PRODUCT",
      payload: undefined,
    });
    deleteProduct(1);
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: "DELETE_PRODUCT",
      payload: 1,
    });
  });

  it("Al hacer click en el botón, debería despachar la action deleteProduct recibida por props", () => {
    const num = Math.floor(Math.random() * 10);
    const deleteProduct = jest.fn();
    const { getByText } = render(
      <Card id={num} deleteProduct={deleteProduct} />
    );
    const button = getByText("X");
    fireEvent.click(button);
    expect(deleteProduct).toHaveBeenCalledWith(num);
  });
});
