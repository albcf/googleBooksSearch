import React from 'react';

const BookLinks = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="button-group">
        <a href={props.volumeInfo.previewLink}
           className="btn btn-sm btn-outline-secondary">Preview</a>
        <a href={props.volumeInfo.infoLink}
           className="btn btn-sm btn-outline-secondary">More information</a>
      </div>
    </div>
  );
};

export default BookLinks;
