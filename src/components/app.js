import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

import SearchBar from '../containers/search_bar';
import ContribsGrid from '../containers/contribs_grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
    this.onChange = this.handleChange.bind(this);
    this.onClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    for (var i = 1; i < 2; i++) {
      this.props.fetchContribsIfNeeded(i);
    }
  }
  
  // Put handlers on top level and bubble up events
  handleChange(e) {
    e.preventDefault();
    const { type, target } = e;
    const { contribs } = this.props;

    if (type === 'change') {
      if (target.id === 'search-form') {
        this.props.searchContribs(target.value);
        this.props.filterContribs(target.value); 
      } 
    } 
  }

  handleClick (e) {
    e.preventDefault();
    const { type, target } = e;
    const { contribs } = this.props;

    if (type === 'click') {
      console.log(e.target.parentElement.parentElement.id)
      const contribID = e.target.parentElement.parentElement.id;
      this.props.upvote(contribID);
    } 
  }

  render() {
    const { contribs } = this.props;

    return (
      <div role="presentation" onChange={this.onChange} onClick={this.onClick}>
        <h1>REDUX CONTRIBS</h1>
        {/* passing in search term here */}
        <SearchBar id="search-form" searchTerm={contribs.searchTerm} />
        <ContribsGrid filterTerm={this.state.searchTerm} />
      </div>
    );
  }
}

function mapStateToProps({ contribs }) { // state.contribs
  return { contribs }; // { contribs: contribs }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
