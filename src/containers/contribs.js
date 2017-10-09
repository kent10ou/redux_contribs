import React, { Component } from 'react';

class Contribs extends Component {
  render() {
    return (
      <div key={idx}>
        <img src={data.avatar_url} key={data.id} />
        <div className="username" key={data.login}>{data.login}</div>
      </div>
    );
  }
}

export default Contribs;