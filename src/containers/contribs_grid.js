import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchGithub } from '../actions/index';

class ContribsGrid extends Component {

  componentDidMount() {
    // fire action to fetch 
    console.log('component mounted');
    this.props.fetchGithub();
  }

  renderData (data) {
    return (
      <div key={data.login}>{data.login}</div>
    )
  }

  render() {
    const { contribs } = this.props;
    console.log('data: ', contribs);

    return (
      <div>
        CONTRIBUTORS OF REACTJS/REDUX
        <div>{ !contribs.payload ? <p>LOADING</p> : this.props.contribs.payload.map(this.renderData)}</div>
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