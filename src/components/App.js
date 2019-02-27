import React from 'react';
import googleBooks from '../api/googleBooks';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {
  state = { books: [] };

  handleSearchSubmit = async (searchQuery) => {
    const response = await googleBooks.get('/books/v1/volumes', {
      params: { q: searchQuery}
    });
    console.log(response.data.items);
    console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
    console.log(response.data.items[1].volumeInfo.imageLinks.thumbnail);
    this.setState({ books: response.data.items });
  }
  render() {
    return (
      <div className="container-fluid">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        
        <div className="row">
          <BookList books={this.state.books} />
        </div>
      </div>
    )
  }
}

export default App;
