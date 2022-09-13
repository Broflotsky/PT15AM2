import { DELETE_PRODUCT, ADD_PRODUCT } from './types';

export const addProduct = (product) => {
   return { type: ADD_PRODUCT, payload: product };
};

export const deleteProduct = (productName) => {
   return { type: DELETE_PRODUCT, payload: productName };
};
