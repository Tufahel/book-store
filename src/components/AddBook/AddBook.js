import React from 'react';

function AddBook() {
  return (
    <div>
      <form action="">
        <p>Add New Book</p>
        <label htmlFor="title">
          <input type="text" id="title" name="title" placeholder="Book Name...." />
        </label>
        <label htmlFor="author">
          <input type="text" id="author" name="author" placeholder="Author..." />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
