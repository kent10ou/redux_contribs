import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Contribs from './contribs'

class ContribsGrid extends Component {

  renderData (data, idx) {
    // console.warn('data: ', data);
    return (
      <Contribs key={idx} data={data} />
    )
  }

  render() {
    const { contribs } = this.props;
// console.warn('contribs: ', contribs.filteredContributors);
    // if data is not loaded yet -> 'loading', otherwise map through data and render Contribs comp. 
    if (contribs.isFetching && !contribs.payload.length) { return <p>Loading...</p> }

    return (
      <div>
        <div className='contribs-grid'>{contribs.filteredContributors.map(this.renderData)}</div>
      </div>
    );
  }
}

function mapStateToProps({ contribs }) { // state.contribs
  return { contribs }; // { contribs: contribs }
}

export default connect(mapStateToProps)(ContribsGrid);