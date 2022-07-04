// Configuramos test
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
// Importamos variables/componentes
import Bienvenido, {
  studentName,
  techSkills,
  alerts
} from '../src/components/Bienvenido.jsx'
import Botones from '../src/components/Botones.jsx'

configure({ adapter: new Adapter() })

describe('React-Intro tests', () => {
  const wrapperBienvenido = shallow(<Bienvenido />)
  const divBienvenido = wrapperBienvenido.find('div')

  const wrapperBotones = shallow(<Botones alerts={alerts} />)
  const divBotones = wrapperBotones.find('div')

  it('Renderiza el componente ', () => {
    expect(wrapperBienvenido).toBeTruthy()
  })

  it("Debe contener una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(divBienvenido).toHaveLength(1)
  })

  it("Debe renderizar el titulo con un tag 'h1'", () => {
    const h1 = divBienvenido.find('h1')
    expect(h1.length).toBe(1)
  })

  it("Debe renderizar una etiqueta 'h3' en donde su texto corresponda a la constante 'studentName'", () => {
    const h3 = divBienvenido.find('h3')
    expect(h3.length).toBe(1)
    expect(h3.text()).toBe(studentName)
  })

  it('El arreglo techSkills debe contener al menos 5 elementos', () => {
    expect(techSkills.length).toBeGreaterThanOrEqual(5)
  })

  it("Debe renderizar una etiqueta 'ul'", () => {
    const ul = divBienvenido.find('ul')
    expect(ul.length).toBe(1)
  })

  it('Debe renderizar una etiqueta li por cada tech skill', () => {
    const ul = divBienvenido.find('ul')
    const li = ul.find('li')
    techSkills.length > 5
      ? expect(li.length).toBe(techSkills.length)
      : expect(li.length).toBe(5)
  })

  it('Debe renderizar un componente Botones', () => {
    expect(wrapperBotones).toBeTruthy()
  })

  it("Dentro del componente Botones, debe renderizar una única etiqueta 'div' que contenga todo lo demás", () => {
    expect(divBotones).toHaveLength(1)
  })

  it('Dentro del componente Botones, debe renderizar dos botones', () => {
    const botones = divBotones.find('button')
    expect(botones.length).toBe(2)
  })

  it('Los botones deben tener un evento onClick que ejecuten un alert con un texto aleatorio', () => {
    const botones = divBotones.find('button')
    botones.forEach((boton) => {
      expect(boton.props().onClick).toBeInstanceOf(Function)
    })
  })

  it('Dentro del componente Bienvenido, debe renderizarse el componente Botones', () => {
    const botones = divBienvenido.find('Botones')
    expect(botones.length).toBe(1)
  })

  it('El componente Botones debe recibir un objeto alerts con dos propiedades como props', () => {
    const componentBotones = wrapperBienvenido.find('Botones')
    expect(componentBotones.prop('alerts'))
    expect(Object.keys(componentBotones.prop('alerts')).length).toBe(2)
  })

  it("Dentro del componente Botones, el primer boton debe contener el texto que le pasemos por props como propiedad 'ocultar'", () => {
    const botonOcultar = divBotones.find('button').at(0)
    expect(botonOcultar.text()).toBe(alerts.ocultar)
  })

  it("Dentro del componente Botones, el segundo boton debe contener el texto que le pasemos por props como propiedad 'mostrar'", () => {
    const botonMostrar = divBotones.find('button').at(1)
    expect(botonMostrar.text()).toBe(alerts.mostrar)
  })
})
