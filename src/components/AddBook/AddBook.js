import React from 'react';
import './AddBook.css';

function AddBook() {
  return (
    <div>
      <form action="">
        <p className="form-header">Add New Book</p>
        <div className="inputs">
          <label htmlFor="title">
            <input type="text" id="title" name="title" placeholder="Book Name...." />
          </label>
          <label htmlFor="category">
            <input type="text" id="category" name="category" placeholder="Category..." />
          </label>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
