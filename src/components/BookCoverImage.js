import React from 'react';
import './style.css';

class BookCoverImage extends React.Component {
  constructor(props){
    super();
    this.state = {
      thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : '#'
    };
  }
  render() {
    return (
      <img className="thumbnail-fixed"
           src={this.state.thumbnail}
           alt='book cover'
           ></img>
    );
  }

}

export default BookCoverImage;
