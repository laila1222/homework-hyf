import React from 'react';
import * as API from '../../api';

class ActiveMenu extends React.Component {
  state = {
    data: [],
    url: 'initial',
  };

  componentDidMount() {
    let response;
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
          console.log('error');
        }
      }, 2000);
    });

    Promise.resolve(changeUrl);
    Promise.resolve(fetchData);
  }

  render() {
    console.log(this.state.url);
    console.log(this.state.data);
    // console.log(this.state.url);
    // const { followers_url, following_url, starred_url, repos_url } = this.props.user;
    return (
      <div>
        <h2>{this.props.activeMenuName}</h2>
        <ul>
            {this.state.data.map(repo => (
                <li key={repo.id}>
                    <h4><a href={repo.url}>{repo.name}</a></h4>
                    <p>{repo.description}</p>
                    
                    </li>
            ))}
            {}
        </ul>
        
      </div>
    );
  }
}

export default ActiveMenu;
