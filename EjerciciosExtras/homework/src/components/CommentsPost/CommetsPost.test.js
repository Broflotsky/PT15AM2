import React from 'react';
import { CommentsPost, mapDispatchToProps, mapStateToProps } from './CommentsPost';
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import isReact from 'is-react';
import * as actions from '../../actions/index'

describe('<CommentsPost />', () => {
    let store, state;
    const mockStore = configureMockStore([thunk]);

    beforeEach(() => {
        state = {
            commentsPost: [],
        };
        store = mockStore(state);
        expect(isReact.classComponent(CommentsPost)).toBeTruthy();
    });

    describe('connect Redux', () => {

        it('Debería traer de redux nuestros comentarios del post usando mapStateToProps', () => {
            expect(mapStateToProps(state)).toEqual({ commentsPost: state.commentsPost });
        });

        it('Debería traer por props la funcion getAllCommentsPost de Redux usando mapDispatchToProps', () => {
            const dispatch = jest.fn();
            const getAllCommentsPost = jest.spyOn(actions, 'getAllCommentsPost');
            const props = mapDispatchToProps(dispatch);
            props.getAllCommentsPost(1);
            expect(dispatch).toHaveBeenCalled();
            expect(getAllCommentsPost).toHaveBeenCalled();
        });

    });

});