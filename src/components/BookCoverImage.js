import React from 'react';

class BookCoverImage extends React.Component {
  constructor(props){
    super();
    this.state = {
      thumbnail: (props.imageLinks) ? props.imageLinks.thumbnail : '#'
    };
  }
  render() {
    return (
      <img src={this.state.thumbnail} alt='book cover' ></img>
    );
  }

}

export default BookCoverImage;
