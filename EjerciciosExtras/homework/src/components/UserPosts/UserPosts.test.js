import React from 'react';
import { UserPosts, mapDispatchToProps, mapStateToProps } from './UserPosts';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import isReact from 'is-react';
import * as actions from '../../actions/index'

describe('<UserPosts />', () => {
    let store, state;
    const mockStore = configureMockStore([thunk]);

    beforeEach(() => {
        state = {
            userPosts: [],
        };
        store = mockStore(state);
        expect(isReact.classComponent(UserPosts)).toBeTruthy();
    });

    describe('connect Redux', () => {

        it('Debería traer de redux nuestras posts de usuario usando mapStateToProps', () => {
            expect(mapStateToProps(state)).toEqual({ userPosts: state.userPosts });
        });

        it('Debería traer por props la funcion getAllUserPosts de Redux usando mapDispatchToProps', () => {
            const dispatch = jest.fn();
            const getAllUserPosts = jest.spyOn(actions, 'getAllUserPosts');
            const props = mapDispatchToProps(dispatch);
            props.getAllUserPosts(1);
            expect(dispatch).toHaveBeenCalled();
            expect(getAllUserPosts).toHaveBeenCalled();
        });

    });

});