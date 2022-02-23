import rootReducer from './';
import {  GET_ALL_USERS, GET_ALL_POSTS, GET_ALL_USERS_POST, GET_ALL_COMMENTS_POST  } from '../actions';

describe('Reducer', () => {
    const initialState = {
        users: [],
        posts: [],
        userPosts: [],
        commentsPost: [],
    };
    const jsonUsers = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          },
          {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
              "street": "Victor Plains",
              "suite": "Suite 879",
              "city": "Wisokyburgh",
              "zipcode": "90566-7771",
              "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
              }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
              "name": "Deckow-Crist",
              "catchPhrase": "Proactive didactic contingency",
              "bs": "synergize scalable supply-chains"
            }
          },
    ]
    const jsonPosts =[
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          },
          {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
          },
    ]
    
    const jsonComments = [
        {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          },
    ]

    it('Debería retornar el estado inicial si no se pasa un type válido', () => {
        expect(rootReducer(undefined, [])).toEqual({ users: [], posts: [], userPosts: [], commentsPost: [] });
    });

    it('Debería guardar en nuestro state los users obtenidos de nuestro llamado a la API', () => {
        const result = rootReducer(initialState, { type: GET_ALL_USERS, payload: jsonUsers });
        // Ojooo. Recodar que no debemos mutar nuestro state!
        expect(result).not.toEqual(initialState);
        expect(result).toEqual({
            users: jsonUsers,
            posts: [],
            userPosts: [],
            commentsPost: [],
        });
    });

    it('Debería guardar en nuestro state posts obtenida de nuestro llamado a la API', () => {
        const result = rootReducer(initialState, { type: GET_ALL_POSTS, payload: jsonPosts });
        expect(result).not.toEqual(initialState);
        expect(result).toEqual({
            users: [],
            posts: jsonPosts ,
            userPosts: [],
            commentsPost: [],
        });
    });

    it('Debería guardar en nuestro state los post de un user obtenidos de nuestro llamado a la API', () => {
        const result = rootReducer(initialState, { type: GET_ALL_USERS_POST, payload: jsonPosts });
        // Ojooo. Recodar que no debemos mutar nuestro state!
        expect(result).not.toEqual(initialState);
        expect(result).toEqual({
            users: [],
            posts: [],
            userPosts: jsonPosts,
            commentsPost: [],
        });
    });

    it('Debería guardar en nuestro state los commentsPost de un user obtenidos de nuestro llamado a la API', () => {
        const result = rootReducer(initialState, { type: GET_ALL_COMMENTS_POST, payload: jsonComments });
        // Ojooo. Recodar que no debemos mutar nuestro state!
        expect(result).not.toEqual(initialState);
        expect(result).toEqual({
            users: [],
            posts: [],
            userPosts: [],
            commentsPost: jsonComments,
        });
    });
        
    });

