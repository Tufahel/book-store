const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const addBook = (author, title) => ({
  type: ADD_BOOK,
  payload: {
    id: new Date().getTime().toString(),
    author,
    title,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialData = {
  list: [],
};

const booksReducers = (state = initialData, action) => {
  switch (action.type) {
    case ADD_BOOK:

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.payload.id,
            author: action.payload.author,
            title: action.payload.title,
          },
        ],
      };
    case REMOVE_BOOK:

      return {
        ...state,
        list: state.list.filter((elem) => elem.id !== action.id),
      };
    default: return state;
  }
};

export default booksReducers;
