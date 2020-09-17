const initialState = {
  name: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
      case 'SAVE_NAME':
        return {
          name: action.payload
        }
    default:
      return state;
  }
};