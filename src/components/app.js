import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ContribsGrid from '../containers/contribs_grid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      contribsArray: []
    }
  }
  
  userSearch(term) {
    console.log(term);
    this.setState( {searchTerm: term });
  }

  render() {
    return (
      <div>
        <h1>REDUX CONTRIBS</h1>
        <SearchBar onSearchTermChange={(term) => this.userSearch(term)}/>
        <ContribsGrid filterTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;