import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchContribsIfNeeded } from '../actions/index';

import SearchBar from '../containers/search_bar';
import ContribsGrid from '../containers/contribs_grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  componentDidMount() {
    console.log('APP CDM');
    this.props.fetchContribsIfNeeded();
  }

  userSearch(term) {
    console.log(term);
    this.setState( {searchTerm: term });

  }



  render() {
    const { contribs, filterTerm } = this.props;
    // console.log('APP DATA: ', this.props);
    return (
      <div>
        <h1>REDUX CONTRIBS</h1>
        <SearchBar onSearchTermChange={(term) => this.userSearch(term)}/>
        <ContribsGrid filterTerm={this.state.searchTerm} />
      </div>
    );
  }
}

function mapStateToProps({ contribs }) { // state.contribs
  return { contribs }; // { contribs: contribs }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchContribsIfNeeded }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
