import React from 'react';

class Sidebar extends React.Component {
  render() {
    const {login, avatar_url, id, score, type} = this.props;
    return (
      <div>
        <img src={avatar_url} alt="avatar" />
        <h1>{login}</h1>
        <h2>{type}</h2>
        <h3>Id: {id}</h3>
        <h3>Score: {score}</h3>
      </div>
    );
  }
}

export default Sidebar;
