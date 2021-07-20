import React from 'react';
import {Buscador, mapDispatchToProps, mapStateToProps } from './Buscador';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import isReact from 'is-react';
import * as actions from '../../actions/index'

describe('<Buscador />', () => {
    let store, state;
    const mockStore = configureMockStore([thunk]);

    beforeEach(() => {
        state = {
            posts: [],
        };
        store = mockStore(state);
        expect(isReact.classComponent(Buscador)).toBeTruthy();
    });

    describe('connect Redux', () => {

        it('Debería traer de redux nuestras posts de usuario usando mapStateToProps', () => {
            expect(mapStateToProps(state)).toEqual({ posts: state.posts });
        });

        it('Debería traer por props la funcion getAllPosts de Redux usando mapDispatchToProps', () => {
            const dispatch = jest.fn();
            const getAllPosts = jest.spyOn(actions, 'getAllPosts');
            const props = mapDispatchToProps(dispatch);
            props.getAllPosts();
            expect(dispatch).toHaveBeenCalled();
            expect(getAllPosts).toHaveBeenCalled();
        });

    });

});