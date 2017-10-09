import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithub } from '../actions/index';

import Contribs from './contribs'

class ContribsGrid extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fire action to fetch 
    console.log('contribsGrid component mounted');
    this.props.fetchGithub();
  }

  renderData (data, idx) {
    return (
      <Contribs key={idx} data={data} />
    )
  }

  render() {
    const { contribs, filterTerm } = this.props;
    console.log('data: ', this.props);

    // if data is not loaded yet -> 'loading', otherwise map through data and render Contribs comp. 
    return (
      <div>
        <div className='contribs-grid'>{ !contribs.payload ? <p>LOADING</p> : contribs.payload.map(this.renderData)}</div>
      </div>
    );
  }
}


function mapStateToProps({ contribs }) { // state.contribs
  return { contribs }; // { contribs: contribs }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchGithub }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContribsGrid);