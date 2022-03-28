/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

export const addBook = (author, title) => ({
  type: 'ADD_BOOK',
  payload: {
    id: new Date().getTime().toString(),
    author,
    title,
  },
});

export const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

/* eslint-disable default-param-last */
/* eslint-disable no-case-declarations */

const initialData = {
  list: [],
};

const booksReducers = (state = initialData, action) => {
  switch (action.type) {
    case 'ADD_BOOK':

      const { id, author, title } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id,
            author,
            title,
          },
        ],
      };
    case 'REMOVE_BOOK':

      const newList = state.list.filter((elem) => elem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default: return state;
  }
};

export default booksReducers;
