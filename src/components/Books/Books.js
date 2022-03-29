import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../redux/Books/Books';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import './Books.css';

function Books() {
  const list = useSelector((state) => state.booksReducers.list);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <div className="card">
          <Book title="Default Book" author="Default Author" category="Default Category" progress="64" chapter="Chapter 17" />
          <button
            type="button"
            className="remove-btn"
          >
            Remove Book
          </button>
        </div>
      </div>
      <div>
        {
          list.map((elem) => (
            <div key={elem.id}>
              <div className="card">
                <Book title={elem.title} author={elem.author} category="Action" progress="64" chapter="Chapter 17" />
                <button
                  key={elem.id}
                  type="button"
                  className="remove-btn"
                  onClick={(event) => { event.preventDefault(); dispatch(removeBook(elem.id)); }}
                >
                  Remove Book
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="hr"> </div>
      <AddBook />
    </div>
  );
}

export default Books;
