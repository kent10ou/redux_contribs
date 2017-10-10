import React, { Component } from 'react';

class Contribs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment (event) {
    this.setState({votes: this.state.votes + 1})
  }
  decrement (event) {
    this.setState({votes: this.state.votes - 1})
  }

  render() {
    const { data } = this.props;
    return (
      <div className='contrib-item'>
        <div><img src={data.avatar_url} className='avatar' key={data.id} /></div>
        <div className="username" key={data.login}>{data.login}</div>
        <div>Votes: {this.state.votes}</div>
        <div className='btn-group'>
          <button className='btn btn-danger' onClick={this.decrement}>-</button><button className='btn btn-success' onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

export default Contribs;