import React, { Component } from 'react';

class SearchBar extends Component {
/*  constructor(props) {
    super(props)

    this.state = {
      inputValue: ''
    }
  }

  // Put the change handler on the container as it bubbles up
  onInputChange(inputValue) {
    this.setState({ inputValue });
    // modify on props
    this.props.onSearchTermChange(inputValue);

  }
*/
  render() {
    return (
        <input
          id="search-form"
          className="form-control"
          placeholder="find a contributor"
          value={this.props.searchTerm}
          // onChange={event => this.onInputChange(event.target.value)}
        />
    );
  }
}
/*
function mapStateToProps({ contribs }) { // state.contribs
  return { contribs }; // { contribs: contribs }
}

// Just pass in props from the container instead of connecting to store
export default connect(mapStateToProps)(SearchBar);
*/
export default SearchBar;