import React from 'react';
import Repos from './Repos';
import Followers from './Followers';
import Organizations from './Organizations';

class ActiveMenu extends React.Component {
  state = {
    data: [],
    url: 'initial',
  };

  componentDidMount() {
    const changeUrl = new Promise(() => {
      setTimeout(() => {
        this.setState({url: this.props.url});
      }, 1000);
    });

    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fetch(this.state.url)) {
          fetch(this.state.url)
            .then(res => res.json())
            .then(data => this.setState({data}));
        } else {
          console.log('error in fetching data');
        }
      }, 2000);
    });

    Promise.resolve(changeUrl);
    Promise.resolve(fetchData);
  }

  render() {
    console.log(this.state.url);
    console.log(this.state.data);
    return (
      <div>
        <h2>{this.props.activeMenuName}</h2>
        <ul>
          {this.props.activeMenuName === 'Repositories' &&
            this.state.data.map(repo => (
              <Repos
                key={repo.id}
                url={repo.url}
                name={repo.name}
                description={repo.description}
              />
            ))}
          {this.props.activeMenuName === 'Starred' && (
            <p>
              This is some weird url from the api, that doesnt work as it is.
            </p>
          )}
          {this.props.activeMenuName === 'Followers' &&
            this.state.data.map(follower => (
              <Followers
                key={follower.id}
                url={follower.url}
                avatar_url={follower.avatar_url}
                login={follower.login}
              />
            ))}
          {this.props.activeMenuName === 'Organizations' &&
            this.state.data.map(org => (
              <Organizations
                key={org.key}
                login={org.login}
                url={org.url}
                description={org.description}
                avatar_url={org.avatar_url}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default ActiveMenu;
