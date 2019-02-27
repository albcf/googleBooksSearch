import React from 'react';

const BookDetails = (props) => {
  return (
    <div>
      <h4>{props.volumeInfo.title ? props.volumeInfo.title : 'N/A'}</h4>
      <h6>{props.volumeInfo.publisher ? props.volumeInfo.publisher : 'N/A'}</h6>
      <p>Author(s):</p>
      <ul>
        {authorInfo(props.volumeInfo.authors)}
      </ul>
    </div>
  );
}

function authorInfo(authorArray) {
  const authors = authorArray.map((author) => {
    return (<li>{author}</li>);
  });

  return authors;
}

export default BookDetails;
