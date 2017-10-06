import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }
  
  onInputChange(inputValue) {
    this.setState({ inputValue });
    // filter the grid
    this.props.onSearchTermChange(inputValue);
  }

  render() {
    return (
        <input 
          className="form-control"
          placeholder="find a contributor"
          value={this.state.inputValue}
          onChange={event => this.onInputChange(event.target.value)}
        />
    );
  }
}

export default SearchBar;