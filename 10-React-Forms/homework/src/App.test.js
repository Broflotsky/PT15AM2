import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Form, {validate}  from './Form.jsx';

describe('<Form />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Form />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('El form deberia cambiar de estado cuando escriban en el input de username', () => {
    wrapper.find('input[name="username"]').simulate('change', {target: {name: 'username', value: 'NewUsr'}});
    const ele = wrapper.find('input[name="username"]');
    expect(ele.prop('value')).toEqual('NewUsr');
  });
  it('El form deberia cambiar de estado cuando escriban en el input de password', () => {
    wrapper.find('input[name="password"]').simulate('change', {target: {name: 'password', value: 'NewPsw'}});
    const ele = wrapper.find('input[name="password"]');
    expect(ele.prop('value')).toEqual("NewPsw");
  });
  describe('Validacion: ', () => {
    it('validate debe devolver un objeto con un error si el usarname no es un email valido:', () => {
      expect(validate({
        username: 'dassadas',
        password: 'hola1'
      })).toEqual({username: 'Username is invalid'});
    });
    it('validate debe devolver un objeto con un error si el usarname esta vacio:', () => {
      expect(validate({
        username: '',
        password: 'hola1',
      })).toEqual({username: 'Username is required'});
    });
    it('validate debe devolver un objeto con un error si el password no tiene un numero:', () => {
      expect(validate({
        username: 'toni@soyhenry.com',
        password: 'dassadas'
      })).toEqual({password: 'Password is invalid'});
    });
    it('validate debe devolver un objeto con un error si el password esta vacio:', () => {
      expect(validate({
        username: 'toni@soyhenry.com',
        password: ''
      })).toEqual({password: 'Password is required'});
    });
  });
});
