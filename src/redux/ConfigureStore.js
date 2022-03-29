import { createStore, combineReducers } from 'redux';
import booksReducers from './Books/Books';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  booksReducers,
  categoriesReducer,
});

const store = createStore(rootReducer);

export default store;
