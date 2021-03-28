import { ADD_LIST_IMAGE, ADD_FAVOURITED } from "./actionType.js";

export const addListImage = (content) => ({
  type: ADD_LIST_IMAGE,
  payload: {
    content
  }
});

export const addFavourited = (id, url, isCompleted) => ({
  type: ADD_FAVOURITED,
  payload: {
    id,
    url
  }
});
