/**
 * @jest-environment node
 */
// Configuramos test
import * as types from "../src/redux/actions/types";
import * as actions from "../src/redux/actions/actions";
import nodeFetch from "node-fetch";
import thunk from "redux-thunk";
import nock from "nock";
import configureStore from "redux-mock-store";
import data from "../db.json";
global.fetch = nodeFetch;
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

  it("deleteProduct debería retornar un objeto con el payload y el type de la action", () => {
    expect(actions.deleteProduct()).toEqual({
      type: "DELETE_PRODUCT",
      paylad: undefined,
    });
    expect(actions.deleteProduct("Manzanas")).toEqual({
      type: "DELETE_PRODUCT",
      payload: "Manzanas",
    });
  });

  it("getStoreName debería realizar una request a /store y retornar un objeto con el payload y el type de la action", () => {
    const mockStore = configureStore([thunk]);
    const store = mockStore({ storeName: "" });
    const apiMock = nock("http://localhost:3001").persist();
    apiMock.get("/store").reply(200, data.store);
    console.log(data.store);
    return store.dispatch(actions.getStoreName()).then(() => {
      // ^ Si en algún momento tira error en esta línea, recordar que la action DEBE retornar una promesa.
      const actions = store.getActions();
      expect(actions[0].payload).toBe("Henry-Market");
      expect(actions[0]).toEqual({
        type: types.GET_STORE_NAME,
        payload: data.store.name,
      });
      nock.cleanAll();
    });
  });
});
