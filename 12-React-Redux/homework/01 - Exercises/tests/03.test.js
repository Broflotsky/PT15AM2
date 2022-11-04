// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
// Importamos variables/componentes/funciones
import Connect, { mapDispatchToProps } from "../src/components/Form/Form";
import { render, fireEvent, configure } from "@testing-library/react";
const Form = Connect.WrappedComponent;

configure({
  getElementError: (message) => {
    const error = new Error(message);
    error.name = "HomeworkError";
    error.stack = null;
    return error;
  },
});

describe("03 | Ejercicios", () => {
  it("MapDispatchToProps debería retornar las actions para dispatchear", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).addProduct();
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: "ADD_PRODUCT",
      payload: undefined,
    });
    // Recuerda que debe recibir product por parámetros
    mapDispatchToProps(dispatch).addProduct({ name: "Peras" });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: "ADD_PRODUCT",
      payload: { name: "Peras" },
    });
  });

  it("handleSubmit debería hacer dispatch de la action addProduct recibida por props", () => {
    const addProduct = jest.fn();
    const { getByText } = render(<Form addProduct={addProduct} />);
    // El boton debe llamarse ¡ADD! para que el test pueda funcionar correctamente!
    const button = getByText("¡ADD!");
    fireEvent.click(button);
    expect(addProduct).toHaveBeenCalled();
  });

  it("Deberían enviarse los datos del estado local al hacer dispatch de addProduct", () => {
    const addProduct = jest.fn();
    const id = Math.floor(Math.random() * 100);
    Date.now = jest.fn();
    Date.now.mockImplementation(() => {
      return id;
    });
    const { container, getByText } = render(<Form addProduct={addProduct} />);
    // El botón debe llamarse ¡ADD! para que el test pueda funcionar correctamente!
    const button = getByText("¡ADD!");
    const nameInput = container.querySelector('input[name="name"]');
    const priceInput = container.querySelector('input[name="price"]');
    fireEvent.change(nameInput, {
      target: { name: "name", value: "Naranjas" },
    });
    fireEvent.change(priceInput, { target: { name: "price", value: 320 } });
    fireEvent.click(button);
    expect(addProduct.mock.calls[0][0]).toEqual({
      name: "Naranjas",
      price: "320",
      id,
    });
  });
});
