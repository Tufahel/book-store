import { createStore, combineReducers } from 'redux';
import booksReducers from './Books/Books';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  booksReducers,
  categoriesReducer,
});

/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
