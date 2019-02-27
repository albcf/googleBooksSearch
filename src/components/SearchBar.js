import React from 'react';

class SearchBar extends React.Component {
  state = {searchQuery: ''};

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  }
  render(){
    return (
      <section className="jumbotron text-center mt-3">
        <div className="container-fluid">
          <h1 className="jumbotron-heading">Book Search</h1>
          <p className="lead text-muted">Powered by Google</p>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
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
      </section>
    )
  }
}

export default SearchBar;
