
const initialState = {
  count: 0,
  data: {

  },
  amigos: ["Franco", "Toni"],
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
    case 'ADD_FRIEND':
      state.amigos.push("Tito");
      return {
        ...state,
        amigos: state.amigos
      };
    default:
      return {...state}
  }
}
