import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


class App extends React.Component {
  state = { books: [] };

  handleSearchSubmit = async (searchQuery) => {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: { q: searchQuery}
    });

    this.setState({ books: response.data.items });
  }
  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        Found: {this.state.books.length} books
      </div>
    )
  }
}

export default App;
