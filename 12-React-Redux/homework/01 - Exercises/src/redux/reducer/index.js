const initialState = {
   list: [],
};

function rootReducer(state = initialState, { type, payload }) {
   switch (type) {
      case 'ADD_PRODUCT':
         const productAdded = [...state.list];
         productAdded.push(payload);
         return {
            ...state,
            list: productAdded,
         };

      case 'DELETE_PRODUCT':
         const productDeleted = state.list.filter((product) => {
            return product.id !== payload;
         });

         return {
            ...state,
            list: productDeleted,
         };

      default:
         return state;
   }
}

export default rootReducer;
