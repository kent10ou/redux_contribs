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

  render() {
    return (
      <div>
        GRID OF CONTRIBUTORS
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

// export default connect(mapStateToProps)(ContribsGrid);


export default connect(null, mapDispatchToProps)(ContribsGrid);