import React, { Component } from 'react';
import { connect } from "react-redux";
import { upvote, downvote } from "../actions/index";
import { bindActionCreators } from "redux";

class Contribs extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   votes: 0
    // }
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  // increment (event) {
  //   this.setState({votes: this.state.votes + 1})
  // }
  // decrement (event) {
  //   this.setState({votes: this.state.votes - 1})
  // }

  render() {
    const { data, votes } = this.props;

    return (
      <div className='contrib-item'>
        <div><img src={data.avatar_url} className='avatar' key={data.id} /></div>
        <div className="username" key={data.login}>{data.login}</div>
        <div>Votes: {votes}</div>
        <div className='btn-group'>
          <button className='btn btn-danger' onClick={() => this.props.downvote(data.login)}>-</button><button className='btn btn-success' onClick={() => this.props.upvote(data.login)}>+</button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ upvote, downvote }, dispatch);
}
// export default Contribs;
export default connect(null, mapDispatchToProps)(Contribs);