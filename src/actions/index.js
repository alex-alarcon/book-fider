import { normalize } from 'normalizr';

import booksAPI from '../API/books';

import * as schema from '../schemas/book';

import * as actions from './constants';

export default function getBooks(query) {
  return dispatch => {
    dispatch({
      type: actions.BOOKS_REQUEST,
    });

    booksAPI
      .get('', {
        params: {
          q: query,
          // key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(response => {
        const data = normalize(response.data.items, schema.arrayOfBooks);
        dispatch({
          type: actions.BOOKS_SUCCESS,
          payload: data,
        });
      })
      .catch(err => {
        dispatch({
          type: actions.BOOKS_FAILURE,
          payload: err,
        });
      });
  };
}
