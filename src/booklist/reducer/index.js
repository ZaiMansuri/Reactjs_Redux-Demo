import React from 'react';
import { combineReducers } from 'redux';
import BooksReducer from './redcers_book';
import ActievBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActievBook
});

export default rootReducer;
