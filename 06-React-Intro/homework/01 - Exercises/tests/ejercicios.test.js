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

describe('Excercises | React-Intro ', function () {
  describe('01 | Componente "Bienvenido"', () => {
    const wrapperBienvenido = shallow(<Bienvenido />)
    const divBienvenido = wrapperBienvenido.find('div')

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
  })

  describe('02 | Componente "Botones"', () => {
    const wrapperBienvenido = shallow(<Bienvenido />)
    const divBienvenido = wrapperBienvenido.find('div')

    const wrapperBotones = shallow(<Botones alerts={alerts} />)
    const divBotones = wrapperBotones.find('div')

    it('Debe existir un componente llamado "Botones"', () => {
      expect(wrapperBotones).toBeTruthy()
    })

    it("El componente Botones, debe renderizar una única etiqueta 'div' que contenga todo lo demás", () => {
      expect(divBotones).toHaveLength(1)
    })

    it('Debe renderizar dos botones con el texto "Módulo 1" y "Módulo 2" respectivamente', () => {
      const botones = divBotones.find('button')
      const botonM1 = divBotones.find('button').at(0)
      const botonM2 = divBotones.find('button').at(1)
      expect(botones.length).toBe(2)
      expect(botonM1.text()).toBe('Módulo 1')
      expect(botonM2.text()).toBe('Módulo 2')
    })

    it('Los botones deben tener un evento onClick que ejecuten un alert con cualquier texto', () => {
      const botones = divBotones.find('button')
      botones.forEach((boton) => {
        expect(boton.props().onClick).toBeInstanceOf(Function)
      })
    })

    it('Dentro del componente Bienvenido, debe renderizarse el componente Botones', () => {
      const botones = divBienvenido.find('Botones')
      expect(botones.length).toBe(1)
    })

    it('El componente Botones debe recibir como prop un objeto alerts, con dos propiedades', () => {
      const componentBotones = wrapperBienvenido.find('Botones')
      expect(componentBotones.prop('alerts'))
      expect(Object.keys(componentBotones.prop('alerts')).length).toBe(2)
    })

    // Estos deben testear el contenido del window.alert

    // it("El primer botón debe mostrar un 'alert' con el texto que recibe el componente como propiedad 'm1'", () => {
    //   const botonM1 = divBotones.find('button').at(0)
    //   expect(botonM1.text()).toBe(alerts.m1)
    // })

    // it("El segundo botón debe mostrar un 'alert' con el texto que recibe el componente como propiedad 'm2'", () => {
    //   const botonM2 = divBotones.find('button').at(1)
    //   expect(botonM2.text()).toBe(alerts.m2)
    // })
  })
})
