import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from "./types";

export function addItem(payload) {
  return {
    type: ADD_ITEM,
    payload,
  };
}

export function editItem(id) {
  return {
    type: EDIT_ITEM,
    payload: id,
  };
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id,
  };
}
