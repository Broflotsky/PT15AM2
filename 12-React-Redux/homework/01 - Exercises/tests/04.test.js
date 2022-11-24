// Configuramos test
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Importamos variables/componentes/funciones
import { mapStateToProps, Products, mapDispatchToProps } from "../src/components/Products/Products";
import * as actions from '../src/redux/actions/actions';

jest.mock('../src/redux/actions/actions', () => ({
  getStoreName: () => ({ type: "GET_STORE_NAME" })
}));

configure({
  getElementError: (message) => {
    const error = new Error(message);
    error.name = 'HomeworkError';
    error.stack = null;
    return error;
  }
});

configure({ adapter: new Adapter() });
jest.mock('../src/components/Card/Card', () => function Card() {
  return <></>
});
jest.mock('react-redux', () => {
  return {
    connect: (mapStateToProps, mapDispatchToProps) => (ReactComponent) => ({
      mapStateToProps,
      mapDispatchToProps,
      ReactComponent
    }),
    Provider: ({ children }) => children
  }
})

describe('04 | Ejercicios', () => {
  let products;
  beforeEach(() => {
    const list = [
      { name: 'Uvas', price: 321, id: 1 },
      { name: 'Naranjas', price: 203, id: 2 },
      { name: 'Tomates', price: 103, id: 3 }
    ];
    products = mount(<Products list={list} getStoreName={function () {}}/>);
  });
  it('mapStateToProps deberia retornar la propiedad "list" del estado de redux', () => {
    const state = {
      list: [{ name: 'Manzanas', price: 321, id: 1 }, { name: 'Peras', price: 203, id: 2 }]
    };
    // Primera prueba
    expect(mapStateToProps(state)).toEqual({
      list: state.list
    });
    // Segunda prueba
    state.list = undefined
    expect(mapStateToProps(state)).toEqual({
      list: undefined
    });
  });

  it('mapDispatchToProps deberia hacer un dispatch de la action "getStoreName"', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getStoreName();
    expect(dispatch.mock.calls[0][0]).toEqual({
      type: "GET_STORE_NAME",
    });
  });

  it("Products debería invocar a React.useEffect y despachar la action 'getStoreName' sólo al montarse el componente", () => {
    const useEffectSpy = jest.spyOn(React, 'useEffect');
    const getStoreNameSpy = jest.spyOn(actions, 'getStoreName');
    const mockUseEffect = useEffectSpy.mockImplementation((cb) => cb());
    mount(<Products list={[]} getStoreName={getStoreNameSpy}/>);
    expect(mockUseEffect).toHaveBeenCalledTimes(1);
    expect(getStoreNameSpy).toHaveBeenCalledTimes(1);
  });

  it("Products debería renderizar el estado global 'storeName' recibido por props", () => {
    products = mount(<Products getStoreName={function(){}} list={[]} storeName='Henry-Market'/>);
    expect(products.find('h1').at(0).text()).toEqual('Henry-Market');
  });

  it("Products deberia renderizar una Card por cada elemento de la lista recibida por props y asignar las props correspondientes", () => {
    const list = [
      { name: 'Uvas', price: 321, id: 1 },
      { name: 'Naranjas', price: 203, id: 2 },
      { name: 'Tomates', price: 103, id: 3 }
    ];
    const cards = products.find('Card')
    expect(cards.length).toEqual(3);
    cards.forEach((card, i) => {
      expect(card.prop('name')).toEqual(list[i].name);
      expect(card.prop('price')).toEqual(list[i].price);
      expect(card.prop('id')).toEqual(list[i].id);
      expect(card.key()).toBeDefined();
    });
  });
});
