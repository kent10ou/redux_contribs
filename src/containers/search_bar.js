import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }
  
  onInputChange = () => {
    this.setState({ inputValue: event.target.value });
    // filter the grid
    
  }

  render() {
    return (
        <input 
          className="form-control"
          placeholder="find a contributor"
          value={this.state.inputValue}
          onChange={this.onInputChange}
        />
    );
  }
}

export default SearchBar;