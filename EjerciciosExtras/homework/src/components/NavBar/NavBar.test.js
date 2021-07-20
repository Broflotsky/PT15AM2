import React from 'react';
import { NavLink } from 'react-router-dom';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('<NavBar />', () => {
    let nav;
    beforeEach(() => {
        nav = shallow(<NavBar />);
        expect(nav).toBeTruthy();
    });

    it('Debería renderizar tres <NavLink />', () => {
        expect(nav.find(NavLink).length).toBeGreaterThanOrEqual(3);
    });

    it('Debería tener un NavLink con el texto "Home" que cambie la ruta hacia "/"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(0).prop('to')).toEqual('/');
    });

    it('Debería tener un NavLink con el texto "Home" que cambie la ruta hacia "/"', () => {
        // El orden en el que se declaran los Links es importante!
        expect(nav.find(NavLink).at(1).prop('to')).toEqual('/');
        expect(nav.find(NavLink).at(1).text()).toEqual('Home');
    });

    it('Debería tener un segundo NavLink, con texto "Posts" y que cambie la ruta hacia "/filter/posts"', () => {
        expect(nav.find(NavLink).at(2).prop('to')).toEqual('/filter/posts');
        expect(nav.find(NavLink).at(2).text()).toEqual('Posts');
    });

});