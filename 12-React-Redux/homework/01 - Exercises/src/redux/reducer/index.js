import { ADD_PRODUCT, DELETE_PRODUCT } from '../actions/types'

const initialState = {
  list: []
}

function rootReducer (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_PRODUCT:
      return {
        ...state,
        list: [...state.list, payload]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        list: state.list.filter(product => product.id !== payload)
      }
    default:
      return state
  }
}

export default rootReducer
