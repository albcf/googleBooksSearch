import React from 'react';

class SearchBar extends React.Component {
  state = {searchQuery: ''};

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="bookSearchQuery">Book Search</label>
            <input type="text"
                   className="form-control"
                   id="bookSearchQuery"
                   value={this.state.searchQuery}
                   onChange={(e) => this.setState({searchQuery: e.target.value})} />
          </div>
          <button type="submit"
                  className="btn btn-primary"
                  disabled={!this.state.searchQuery}>Submit</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
