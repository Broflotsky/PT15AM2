import React from 'react';
import { Users, mapDispatchToProps, mapStateToProps } from './Users';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import isReact from 'is-react';
import * as actions from '../../actions/index'


describe('<Users />', () => {
    let users, store, state;

    const mockStore = configureMockStore([thunk]);
    beforeEach(() => {
        state = {
            users: [],
        };
        store = mockStore(state);
        expect(isReact.classComponent(Users)).toBeTruthy();
    });

    describe('connect Redux', () => {

        it('Debería traer de redux nuestras houses usando mapStateToProps', () => {
            expect(mapStateToProps(state)).toEqual({ users: state.users });
        });

        it('Debería traer por props la funcion getAllUsers de Redux usando mapDispatchToProps', () => {
            const dispatch = jest.fn();
            const getAllUsers = jest.spyOn(actions, 'getAllUsers');
            const props = mapDispatchToProps(dispatch);
            props.getAllUsers();
            expect(dispatch).toHaveBeenCalled();
            expect(getAllUsers).toHaveBeenCalled();
        });

    });

});