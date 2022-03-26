import React from 'react';
import AddBook from '../AddBook/AddBook';
import Book from '../Book/Book';
import './Books.css';

function Books() {
  return (
    <div>
      <div>
        <div className="card"><Book title="The Hunger Games" author="Suzane Collins" category="Action" progress="64" chapter="Chapter 17" /></div>
        <div className="card"><Book title="Dune" author="Frank Herbert" category="Science Fiction" progress="8" chapter="Chapter 3: A Lesson Learned" /></div>
        <div className="card"><Book title="Capital in the Twenty-First Century" author="Suzane Collins" category="Economy" progress="0" chapter="Introduction" /></div>
      </div>
      <div className="hr"> </div>
      <AddBook />
    </div>
  );
}

export default Books;
