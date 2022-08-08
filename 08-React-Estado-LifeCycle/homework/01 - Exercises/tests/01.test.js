// Configuramos test
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import isReact from 'is-react'
import nock from 'nock'
import data from '../db.json'
import fetch from 'node-fetch'
// Importamos variables/componentes
import Zoo from '../src/components/Zoo/Zoo'

configure({ adapter: new Adapter() })
global.fetch = fetch

describe('01 | Ejercicios', () => {
  let zoo, useState, useStateSpy, useEffect

  beforeAll(() => {
    expect(isReact.classComponent(Zoo)).toBeFalsy()
  })

  const mockUseEffect = () => useEffect.mockImplementation((fn) => fn())

  beforeEach(() => {
    // Se Mockea las request a las api
    const apiMock = nock('http://localhost:3001').persist()

    apiMock.get('/zoo').reply(200, data.zoo)

    useState = jest.fn()
    useStateSpy = jest.spyOn(React, 'useState')
    useEffect = jest.spyOn(React, 'useEffect')
    useStateSpy.mockImplementation(() => [
      { zooName: '', animals: [], allAnimals: [], species: [] },
      useState
    ])

    zoo = shallow(<Zoo />)
    expect(zoo).toBeTruthy()
    mockUseEffect()
  })

  it('Debería inicializar React.useState con un objeto con propiedades dentro', () => {
    /* Los hooks de React si o si los tenes que usar como "React.useState". El test no los reconoce cuando se hace destructuring de estos métodos. */
    expect(useStateSpy).toHaveBeenCalledWith({
      zooName: '',
      animals: [],
      allAnimals: [],
      species: []
    })
  })

  it("Renderiza una etiqueta label encima de la etiqueta h1 que contenga el texto 'Zoo Name:'", () => {
    expect(zoo.childAt(0).type()).toBe('label')
    expect(zoo.childAt(0).text()).toBe('Zoo Name:')
  })

  it('Renderiza una etiqueta input debajo de la etiqueta label y encima de la etiqueta h1', () => {
    expect(zoo.childAt(0).type()).toBe('label')
    expect(zoo.childAt(1).type()).toBe('input')
    expect(zoo.childAt(2).type()).toBe('h1')
  })

  it("La etiqueta h1 debe contener el texto del estado 'zooName'", () => {
    expect(zoo.childAt(2).text()).toBe(useStateSpy()[0].zooName)
  })

  it("A la etiqueta input asígnale el atributo 'value' con el estado 'zoo.zooName'", () => {
    expect(zoo.childAt(1).prop('value')).toBe(useStateSpy()[0].zooName)
  })

  it("Crea una función llamada 'handleInputChange' que se ejecute cuando el usuario escriba en el input, modificando la propiedad zooName del estado", () => {
    const input = zoo.find('input')

    input.simulate('change', {
      target: { value: 'Zoo de Prueba' }
    })
    expect(useState).toHaveBeenCalledWith({
      zooName: 'Zoo de Prueba',
      animals: [],
      allAnimals: [],
      species: []
    })

    input.simulate('change', { target: { value: 'Henry Zoo' } })
    expect(useState).toHaveBeenCalledWith({
      zooName: 'Henry Zoo',
      animals: [],
      allAnimals: [],
      species: []
    })
  })

  // restauramos mocks y cortamos el servidor de nock
  afterEach(() => jest.restoreAllMocks())
  afterEach(() => nock.cleanAll())
})
