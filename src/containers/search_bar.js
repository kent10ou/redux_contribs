import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    return (
        <input
          id="search-form"
          className="form-control"
          placeholder="find a contributor"
          value={this.props.text}

        />
    );
  }
}

export default SearchBar;