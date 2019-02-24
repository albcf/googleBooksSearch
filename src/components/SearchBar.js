import React from 'react';

class SearchBar extends React.Component {
  render(){
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="bookSearchQuery">Book Search</label>
            <input type="text" className="form-control" id="bookSearchQuery" />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
