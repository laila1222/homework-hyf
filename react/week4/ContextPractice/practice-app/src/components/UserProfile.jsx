import React from 'react';
import * as API from '../api';

class User extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const {id} = this.props;
    console.log(id);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const responseJson = await response.json();
    this.setState({user: responseJson});
    console.log(this.state.user);
  }
  render() {
    console.log(this.state.user);

    return (
      <div>
        {!this.state.user ? (
          <p>fetching user</p>
        ) : (
          <p>Name: {this.state.user.name}</p>
          
        )}
      </div>
    );
  }
}

export default User;
