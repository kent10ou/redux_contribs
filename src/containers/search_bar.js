import React, { Component } from 'react';


class SearchBar extends Component {
  
  
  render() {
    return (
      <form onSubmit="" className="input-group">
        <input 
          className="form-control"
          placeholder="find a contributor"
          value=""
          onChange=""
        />
        <span className="input-group-btn">
          <button type="submit" className="btn">Submit</button>
        </span>
      </form>
    );
  }
}

export default SearchBar;