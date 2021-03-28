import { ADD_LIST_IMAGE, ADD_FAVOURITED } from "../action/actionType";

const initialStore = { content: [], listFavourited: [] };

export default function (state = initialStore, action) {
  switch (action.type) {
    case ADD_LIST_IMAGE: {
      return {
        ...state,
        content: action.payload.content.data
      };
    }
    case ADD_FAVOURITED: {
      const { id, url } = action.payload;

      if (!state.listFavourited.filter((item) => item.id === id).length) {
        return {
          ...state,
          listFavourited: [...state.listFavourited, { id, url }]
        };
      } else {
        const index = state.listFavourited.findIndex(
          (value) => value.id === id
        );
        return {
          ...state,
          listFavourited: [
            ...state.listFavourited.slice(0, index),
            ...state.listFavourited.slice(index + 1)
          ]
        };
      }
    }
    default:
      return state;
  }
}
