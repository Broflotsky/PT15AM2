import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
    GET_ALL_POSTS, GET_ALL_USERS_POST, GET_ALL_USERS, GET_ALL_COMMENTS_POST,
    getAllUsers, getAllCommentsPost, getAllUserPosts, getAllPosts
} from "./index";


describe('Actions', () => {

    const mockStore = configureStore([thunk]);
    const store = mockStore({ users: [], });

    beforeEach(() => store.clearActions());

    describe('getAllUsers', () => {

        it('Debería guardar en una variable GET_ALL_USERS el type "GET_ALL_USERS" que vamos a usar en la action creator "getAllUsers"', () => {
            expect(GET_ALL_USERS).toBe('GET_ALL_USERS');
        });

        it('Debería hacer un dispatch con las propiedades type "GET_ALL_USERS" y como payload, el resultado del fetch al link provisto', async () => {
            // La respuesta del get nos va a traer un montón de cosas. Agregar al payload solamente lo necesario.

            return store.dispatch(getAllUsers())
                .then(() => {
                    const actions = store.getActions();
                    expect(actions[0].type).toEqual(
                        'GET_ALL_USERS'
                    );
                })
                .catch(err => console.error(err));
        });

    });

    describe('getAllUserPosts', () => {

        it('Debería guardar en una variable GET_ALL_USERS_POST el type "GET_ALL_USERS_POST" que vamos a usar en la action creator "getAllUserPosts"', () => {
            expect(GET_ALL_USERS_POST).toBe('GET_ALL_USERS_POST');
        });

        it('Debería hacer un dispatch con las propiedades type "GET_ALL_USERS_POST" y como payload, el resultado del fetch al link provisto', async () => {
            return store.dispatch(getAllUserPosts())
                .then(() => {
                    const actions = store.getActions();
                    expect(actions[0].type).toEqual(
                        'GET_ALL_USERS_POST'
                    );
                })
                .catch(err => console.error(err));
        });

    });

    describe('getAllCommentsPost', (id) => {

        it('Debería guardar en una variable GET_ALL_COMMENTS_POST el type "GET_ALL_COMMENTS_POST" que vamos a usar en la action creator "getAllCommentsPost"', () => {
            expect(GET_ALL_COMMENTS_POST).toBe('GET_ALL_COMMENTS_POST');
        });
    
        it('Debería hacer un dispatch con las propiedades type "GET_ALL_COMMENTS_POST" y como payload, los values recibidos como argumento y un ID incremental en la action creator "getAllCommentsPost"', () => {
            const id = 1
    
            return store.dispatch(getAllCommentsPost(id))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(
                    'GET_ALL_COMMENTS_POST'
                );
            })
            .catch(err => console.error(err));
    
        });

    });

    describe('getAllPosts', () => {

        it('Debería guardar en una variable GET_ALL_POSTS el type "GET_ALL_POSTS" de la action createHouse', () => {
            expect(GET_ALL_POSTS).toBe('GET_ALL_POSTS');
        });
        
        it('Debería hacer un dispatch con las propiedades type "GET_ALL_POST" y como payload, los values recibidos como argumento en la action creator "getAllPosts"', () => {
        return store.dispatch(getAllPosts())
            .then(() => {
                const actions = store.getActions();
                expect(actions[0].type).toEqual(
                    'GET_ALL_POSTS'
                );
            })
            .catch(err => console.error(err));

        });
    });

})