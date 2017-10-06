import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ContribsGrid from '../containers/contribs_grid';

class App extends Component {
  render() {
    return (
      <div>
        <h1>REDUX CONTRIBS</h1>
        <SearchBar />
        <ContribsGrid />
      </div>
    );
  }
}

export default App;