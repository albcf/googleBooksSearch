import React from 'react';
import './style.css';

class BookCoverImage extends React.Component {
  constructor(props){
    super();
    this.state = {
      thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/1/16/No_image_available_450_x_600.svg'
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
