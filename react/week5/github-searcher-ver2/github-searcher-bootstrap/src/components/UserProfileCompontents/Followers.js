import React from 'react';

class Followers extends React.Component {
  render () {
    console.log (this.props);
    const {login, url, avatar_url} = this.props;
    return (
      <div className="column card-padding">
        <div className="ui fluid card">
          <div className="image">
            <a href={url}>
              <img
                src={avatar_url}
                alt="followers-avatar"
                className="followers-image"
              />
            </a>
          </div>
          <div className="content">
            <div className="header">{login}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Followers;
