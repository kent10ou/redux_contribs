import React, { Component } from 'react';
import fetchGithub from '../actions/index';

class ContribsGrid extends Component {
  componentDidMount() {
    // fire action to fetch 
    this.props.fetchGithub();
  }

  render() {
    return (
      <div>
        GRID OF CONTRIBUTORS
      </div>
    );
  }
}

export default ContribsGrid;