import React from 'react';
import BookCoverImage from './BookCoverImage';

const BookList = (props) => {
  const books = props.books.map((book) => {
    return (
    <div key={book.id} className="col-md-4">
      <div className="card mb-4 box-shadow">
        <BookCoverImage {...book.volumeInfo} />

        <div className="card-body">
          <h4>{book.volumeInfo.title ? book.volumeInfo.title : 'N/A'}</h4>
          <h6>{book.volumeInfo.publisher ? book.volumeInfo.publisher : 'N/A'}</h6>

          <div className="d-flex justify-content-between align-items-center">
            <div className="button-group">
              <a href={book.volumeInfo.previewLink} className="btn btn-sm btn-outline-secondary">Preview</a>
              <a href={book.volumeInfo.infoLink} className="btn btn-sm btn-outline-secondary">More information</a>
            </div>
          </div>

        </div>

      </div>
    </div>
    );
  });

  return books;
};

export default BookList;
