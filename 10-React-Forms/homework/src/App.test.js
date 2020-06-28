import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Form, {validate}  from './Form.jsx';

describe('<Form />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Form />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Estados: ', () => {
    it('El form deberia cambiar de estado cuando escriban en el input de username', () => {
      wrapper.find('input[name="username"]').simulate('change', {target: {name: 'username', value: 'My new value'}});
      expect(setState).toHaveBeenCalledWith({"username": "My new value", "password": ""});
    });
    it('El form deberia cambiar de estado cuando escriban en el input de password', () => {
      wrapper.find('input[name="username"]').simulate('change', {target: {name: 'password', value: 'My new value'}});
      expect(setState).toHaveBeenCalledWith({"username": "", "password": "My new value"});
    });
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


