import { postBook, getBook, deleteBook } from '../../api/Api';

const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const GET_BOOKS = 'book-store/books/GET_BOOK';

export const addBook = (title, category, author) => async (dispatch) => {
  const id = new Date().getTime().toString();
  await postBook(id, title, category, author);
  dispatch({
    type: ADD_BOOK,
    payload: {
      item_id: id,
      title,
      author,
      category,
    },
  });
};

export const getBooks = () => async (dispatch) => {
  const book = await getBook();
  dispatch({ type: GET_BOOKS, payload: book });
};

export const removeBook = (id) => async (dispatch) => {
  await deleteBook(id);
  dispatch({ type: REMOVE_BOOK, payload: id });
};

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
            id: action.payload.item_id,
            title: action.payload.title,
            author: action.payload.author,
            category: action.payload.category,
          },
        ],
      };

    case GET_BOOKS:

      return [...state];

    case REMOVE_BOOK:

      return {
        ...state,
        list: state.list.filter((elem) => elem.item_id !== action.item_id),
      };
    default: return state;
  }
};

export default booksReducers;
