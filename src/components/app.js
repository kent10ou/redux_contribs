import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ContribsGrid from '../containers/contribs_grid';

class App extends Component {
  userSearch(term) {
    console.log(term);
  }

  render() {
    return (
      <div>
        <h1>REDUX CONTRIBS</h1>
        <SearchBar onSearchTermChange={(term) => this.userSearch(term)}/>
        <ContribsGrid />
      </div>
    );
  }
}

export default App;