import React from 'react';
import BookCoverImage from './BookCoverImage';
import BookLinks from './BookLinks';
import BookDetails from './BookDetails';

const BookList = (props) => {
  const books = props.books.map((book) => {
    return (
    <div key={book.id} className="col-md-4">
      <div className="card mb-4 box-shadow">
        <BookCoverImage {...book.volumeInfo} />

        <div className="card-body">

          <BookDetails volumeInfo={book.volumeInfo} />
          <BookLinks volumeInfo={book.volumeInfo} />

        </div>

      </div>
    </div>
    );
  });


  return books;
};

export default BookList;
