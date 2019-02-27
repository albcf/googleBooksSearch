import React from 'react';
import './style.css';
import googleBooks from '../api/googleBooks';
import SearchBar from './SearchBar';
import BookList from './BookList';

class App extends React.Component {
  state = { books: [] };

  handleSearchSubmit = async (searchQuery) => {
    const response = await googleBooks.get('/books/v1/volumes', {
      params: { q: searchQuery}
    });

    // used to see structure of the message from API response
    //console.log(response.data.items);

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
