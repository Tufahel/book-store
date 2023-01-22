import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import UsersReducer from './reducers/User';
import booksReducers from './Books/Books';
import categoriesReducer from './Categories/Categories';

const rootReducer = combineReducers({
  UsersReducer,
  booksReducers,
  categoriesReducer,
});

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));
export default store;
