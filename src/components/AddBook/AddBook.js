import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddBook.css';
import { addBook } from '../../redux/Books/Books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
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
              required
            />
          </label>
          <label htmlFor="author">
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Author Name...."
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </label>
          <label htmlFor="category">
            <input
              name="category"
              type="text"
              placeholder="Category"
              list="category"
              onChange={(e) => setCategory(e.target.value)}
              required
            />
            <datalist id="category">
              <option value="Action">Action</option>
              <option value="Fiction">Fiction</option>
              <option value="Non Fiction">Non Fiction</option>
              <option value="Phylosophy">Phylosophy</option>
            </datalist>
          </label>
          <button
            type="submit"
            onClick={(event) => { event.preventDefault(); dispatch(addBook(title, author, category), setAuthor(''), setTitle('')); }}
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
