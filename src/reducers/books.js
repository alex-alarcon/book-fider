import {
  BOOKS_REQUEST,
  BOOKS_SUCCESS,
  BOOKS_FAILURE,
} from '../actions/constants';

const initialState = {
  bookList: [],
  isFetching: false,
  error: '',
};

const fetchBooks = (state = initialState, { type, payload }) => {
  switch (type) {
    case BOOKS_REQUEST:
      return { ...state, isFetching: true };
    case BOOKS_SUCCESS:
      return { ...state, isFetching: false, bookList: payload.result };
    case BOOKS_FAILURE:
      return { ...state, isFetching: false, error: { ...payload } };
    default:
      return state;
  }
};

export default fetchBooks;
