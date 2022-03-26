import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Book.css';

/* eslint-disable react/prop-types */
function Book(props) {
  const {
    title, author, category, progress, chapter,
  } = props;
  return (
    <div className="grid-container">
      <div className="grid-item items-1">
        <p>{category}</p>
        <h2>{title}</h2>
        <p className="author">{author}</p>
      </div>
      <div className="grid-item items-2">
        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar value={progress} />
        </div>
        <div className="progress">
          <p className="percent">
            {progress}
            %
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="grid-item vl" />
      <div className="grid-item items-3">
        <p className="current">Current Progress</p>
        <p>{chapter}</p>
        <button type="button">Update Progress</button>
      </div>
      <button type="button" className="remove-btn">Remove</button>
    </div>
  );
}

export default Book;
