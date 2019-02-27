import React from 'react';
import BookCoverImage from './BookCoverImage';

const BookList = (props) => {
  const books = props.books.map((book) => {
    return (<div key={book.id} className="col-md-4">
      <h4>{book.volumeInfo.title ? book.volumeInfo.title : 'N/A'}</h4>
      <h6>{book.volumeInfo.publisher}</h6>
      <BookCoverImage {...book.volumeInfo} />
    </div>
    );
  });

  return books;
};

export default BookList;
