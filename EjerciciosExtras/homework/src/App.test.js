import React from 'react';

import { Route } from "react-router-dom";
import App from './App';
import NavBar from "./components/NavBar/NavBar";
import { shallow } from 'enzyme'

describe('<App />', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App />);
        expect(app).toBeTruthy();
    });

	it('Debería renderizar <NavBar />', () => {
        expect(app.find(NavBar).length).toEqual(1);
    });
    
	it('Debería tener una ruta con el texto que cambie hacia "/filter/posts"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(0).prop('path')).toEqual('/filter/posts');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(1).prop('path')).toEqual('/');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/users/:id/posts"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(2).prop('path')).toEqual('/users/:id/posts');
    });

    it('Debería tener una ruta con el texto que cambie hacia "/user/:userid/post/:id/coments"', () => {
        // El orden en el que se declaran las rutas es importante!
        expect(app.find(Route).at(3).prop('path')).toEqual('/user/:userid/post/:id/coments');
    });

});

