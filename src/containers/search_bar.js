import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

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

    let newDisplay = _.filter(this.props.contribs.payload, person => person.login.includes())

    
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

function mapStateToProps({ contribs }) { // state.contribs
  return { contribs }; // { contribs: contribs }
}

export default connect(mapStateToProps)(SearchBar);
