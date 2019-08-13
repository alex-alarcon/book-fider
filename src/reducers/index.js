import { combineReducers } from 'redux';

import getBooks from './books';
import addEntity from './entities';

const rootReducer = combineReducers({
  books: getBooks,
  entities: addEntity,
});

export default rootReducer;
