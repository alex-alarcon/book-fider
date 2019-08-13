import { BOOKS_SUCCESS } from '../actions/constants';

const initialState = {
  books: {},
};

const addEntity = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          ...payload.entities.books,
        },
      };
    default:
      return state;
  }
};

export default addEntity;
