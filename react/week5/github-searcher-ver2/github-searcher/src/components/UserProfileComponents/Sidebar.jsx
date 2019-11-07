import React from 'react';

class Sidebar extends React.Component {
  render() {
    const {login, avatar_url, id, score, type} = this.props;
    return (
      <div id="sidebar" className="light-color">
        <img src={avatar_url} alt="avatar" id="sidebar-avatar" />
        <h1>{login}</h1>
        <h3>{type}</h3>
        <h4>Id: {id}</h4>
        <h4>Score: {score}</h4>
      </div>
    );
  }
}

export default Sidebar;
