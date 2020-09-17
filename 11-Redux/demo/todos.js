const redux = require('redux');

const createStore = redux.createStore;

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO';


const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload]
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log('Subscription: ', store.getState());
});

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1))

console.log(store.getState());