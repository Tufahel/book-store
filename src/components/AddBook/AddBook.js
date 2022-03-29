import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddBook.css';
import { addBook } from '../../redux/Books/Books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <form action="">
        <p className="form-header">Add New Book</p>
        <div className="inputs">
          <label htmlFor="title">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Book Name...."
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label htmlFor="author">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author..."
              onChange={(e) => setAuthor(e.target.value)}
            />
          </label>
          <button
            type="submit"
            onClick={(event) => { event.preventDefault(); dispatch(addBook(author, title), setAuthor(''), setTitle('')); }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
