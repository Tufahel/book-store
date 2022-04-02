import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './AddBook.css';
import { addBook } from '../../redux/Books/Books';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Author Name');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <form>
        <p className="form-header">Add New Book</p>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
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
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <label htmlFor="category">
              <input
                id="category"
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
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2">
            <button
              className="submit-btn"
              type="submit"
              onClick={(event) => { event.preventDefault(); dispatch(addBook(title, author, category), setAuthor('Author Name'), setTitle('')); }}
            >
              Add Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
