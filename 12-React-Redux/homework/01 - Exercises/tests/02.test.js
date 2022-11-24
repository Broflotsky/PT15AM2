// Configuramos test
import reducer from "../src/redux/reducer/index";
import * as actions from "../src/redux/actions/actions";
import data from '../db.json';

jest.mock('../src/redux/actions/actions', () => ({
  __esmodules: true,
  addProduct: (payload) => ({
    type: 'ADD_PRODUCT',
    payload
  }),

  deleteProduct: (payload) => ({
    type: 'DELETE_PRODUCT',
    payload
  }),

  getStoreName: (payload) => ({
    type: 'GET_STORE_NAME',
    payload
  })
}));

describe("02 | Ejercicios", () => {
  it("El reducer debería agregar un producto a la lista cuando el caso es 'ADD_PRODUCT", () => {
    const state = {
      list: [],
    };
    const payloads = [
      {
        name: "Bananas",
        price: 120,
        id: 13123,
      },
      {
        name: "Uvas",
        price: 200,
        id: 54631,
      },
    ];
    const firstProduct = reducer({ ...state }, actions.addProduct(payloads[0]));

    const secondProduct = reducer(
      { ...state },
      actions.addProduct(payloads[1])
    );

    // Chequeamos de que no se esté mutando el estado
    expect(firstProduct).not.toEqual(state);
    expect(secondProduct).not.toEqual(state);
    expect(firstProduct).toEqual({
      list: [payloads[0]],
    });

    expect(secondProduct).toEqual({
      list: [payloads[1]],
    });
  });

  it("El reducer debería eliminar un producto de la lista cuando el caso es 'DELETE_PRODUCT", () => {
    const state = {
      list: [
        { id: 12313, name: "Mandarinas", price: 230 },
        { id: 65445, name: "Tomates", price: 130 },
      ],
    };
    const payload1 = 12313;
    const payload2 = 65445;

    const firstCall = reducer({ ...state }, actions.deleteProduct(payload1));
    const secondCall = reducer({ ...state }, actions.deleteProduct(payload2));

    expect(firstCall).not.toEqual(state);
    expect(secondCall).not.toEqual(state);

    expect(firstCall).toEqual({
      list: [{ id: 65445, name: "Tomates", price: 130 }],
    });

    expect(secondCall).toEqual({
      list: [{ id: 12313, name: "Mandarinas", price: 230 }],
    });
  });

  it("El reducer debería setear la propiedad 'storeName' con el valor de action.payload", () => {
    const state = {
      storeName: ""
    };
    const results = reducer(state, {
      type: 'GET_STORE_NAME',
      payload: data.store.name
    });
    expect(results).not.toEqual(state);
    // ^ No mutar el estado!
    expect(results).toEqual({
      storeName: data.store.name
    });
  });

  it("El reducer debería retornar el estado inicial si no se cumplió ningún caso", () => {
    expect(reducer(undefined, [])).toEqual({
      list: [],
      storeName: ""
    });
  });
});
