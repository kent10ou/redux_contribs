import React, { Component } from 'react';

class Contribs extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className='contrib-item'>
        <div><img src={data.avatar_url} className='avatar' key={data.id} /></div>
        <div className="username" key={data.login}>{data.login}</div>
      </div>
    );
  }
}

export default Contribs;