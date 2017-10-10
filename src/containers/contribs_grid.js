import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { fetchContribsIfNeeded } from '../actions/index';

import Contribs from './contribs'

class ContribsGrid extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
    // fire action to fetch 
    // console.log('contribsGrid component mounted');
    // this.props.fetchContribsIfNeeded();
  // }

  renderData (data, idx) {
    return (
      <Contribs key={idx} data={data} />
    )
  }

  render() {
    const { contribs } = this.props;
    // console.log('contribs_grid - props: ', this.props);

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

/*
function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchContribsIfNeeded }, dispatch);
}
*/
export default connect(mapStateToProps)(ContribsGrid);