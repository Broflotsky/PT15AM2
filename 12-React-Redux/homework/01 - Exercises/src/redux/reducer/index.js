import { DELETE_PRODUCT, ADD_PRODUCT } from '../actions/types';

const initialState = {
   list: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case ADD_PRODUCT:
         let aca = [...state.list];
         aca.push(payload);
         return { ...state, list: aca };

      case DELETE_PRODUCT:
         let aca2 = [...state.list].filter((p) => {
            return p.id !== payload;
         });
         return { ...state, list: aca2 };

      default:
         return state;
   }
};

export default rootReducer;
