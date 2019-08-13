import { createSelector } from 'reselect';
import { denormalize } from 'normalizr';

import { bookSchema } from '../schemas/book';

const boooksIdSelector = state => state.books.bookList;

const booksEntitiesSelector = state => state.entities;

const getBooks = (idList, entities) => {
  return denormalize(idList, [bookSchema], entities);
};

export default createSelector(
  boooksIdSelector,
  booksEntitiesSelector,
  getBooks,
);
