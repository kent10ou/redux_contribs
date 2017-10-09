import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithub } from '../actions/index';

import Contribs from './contribs'

class ContribsGrid extends Component {

  componentDidMount() {
    // fire action to fetch 
    console.log('component mounted');
    // this.props.fetchGithub();
  }

  renderData (data, idx) {
    return (
      <div key={idx}>
        <img src={data.avatar_url} key={data.id} />
        <div className="username" key={data.login}>{data.login}</div>
      </div>
    )
  }

  render() {
    const { contribs } = this.props;
    const { filterTerm } = this.props;
    console.log('data: ', this.props);

    return (
      <div>
        CONTRIBUTORS OF REACTJS/REDUX
        <div>{ !contribs.payload ? <p>LOADING</p> : contribs.payload.map(this.renderData)}</div>
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