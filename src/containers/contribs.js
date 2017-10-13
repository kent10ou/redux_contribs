import React, { Component } from 'react';
import { connect } from "react-redux";
import { upvote, downvote } from "../actions/index";
import { bindActionCreators } from "redux";

class Contribs extends Component {
  constructor(props) {
    super(props);
 
  }

  render() {
    const { data } = this.props;
    // console.warn("PROPS: ", this.props)
    return (
      <div className='contrib-item' id={data.login}>
        <div><img src={data.avatar_url} className='avatar' key={data.id} /></div>
        <div className="username" key={data.login}>{data.login}</div>
        <div>Votes: {data.votes}</div>
        <div className='btn-group'>
          <button id={`downvote-${data.login}`} className='btn btn-danger downvote'>-</button>
          <button id={`upvote-${data.login}`} className='btn btn-success upvote'>+</button>
        </div>
      </div>
    );
  }
}



// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ upvote, downvote }, dispatch);
// }
export default Contribs;
// export default connect(null, mapDispatchToProps)(Contribs);