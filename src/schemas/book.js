import { schema } from 'normalizr';

export const bookSchema = new schema.Entity('books');

export const arrayOfBooks = new schema.Array(bookSchema);
