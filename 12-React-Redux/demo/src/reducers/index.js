
const initialState = {
  count: 0,
  loading: false,
  post: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: 0,
      }
    case 'GET_POST':
      return {
        ...state,
        loading: true,
      }
    case 'RECEIVE_POST':
      return {
        ...state,
        loading: false,
        post: action.post,
      }
    default:
      return {...state}
  }
}
