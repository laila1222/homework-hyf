import React from 'react';

class Followers extends React.Component {
  render () {
    console.log (this.props);
    const {login, url, avatar_url} = this.props;
    return (
      <li>
        <h4><a href={url}>{login}</a></h4>
          <img src={avatar_url} alt="avatar" />
          <p />
      </li>
    );
  }
}

export default Followers;
