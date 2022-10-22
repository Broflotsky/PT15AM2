// Configuramos test
import * as types from "../src/redux/actions/types";
import * as actions from "../src/redux/actions/actions";

describe("02 | Ejercicios", () => {
  it("Debería declarar y exportar las variables ADD_PRODUCT y DELETE_PRODUCT", () => {
    expect(types.ADD_PRODUCT).toBeDefined();
    expect(types.DELETE_PRODUCT).toBeDefined();
    expect(types.ADD_PRODUCT).toEqual("ADD_PRODUCT");
    expect(types.DELETE_PRODUCT).toEqual("DELETE_PRODUCT");
  });

  it("addProduct debería retornar un objeto con el payload y el type de la action", () => {
    // En principio probamos enviando undefined como parametro
    expect(actions.addProduct(undefined)).toEqual({
      type: "ADD_PRODUCT",
      payload: undefined,
    });
    const product = {
      id: Date.now(),
      name: "Naranjas",
      price: "20",
    };
    expect(actions.addProduct(product)).toEqual({
      type: "ADD_PRODUCT",
      payload: product,
    });
  });

  it("deleteProduct debería retornar un objeto con el payload type de la action", () => {
    expect(actions.deleteProduct()).toEqual({
      type: "DELETE_PRODUCT",
      paylad: undefined,
    });
    expect(actions.deleteProduct("Manzanas")).toEqual({
      type: "DELETE_PRODUCT",
      payload: "Manzanas",
    });
  });
});
