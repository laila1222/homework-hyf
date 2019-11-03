import React from 'react';
import * as API from '../api';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import UserProfile from './UserProfile';


class UserList extends React.Component {
  state = {
    users: [],
  };

  

  async componentDidMount() {
    const user = await API.getUser();
    this.setState({users: user});
    // console.log(this.state.users);
  }

  render() {
    
    return (
      <React.Fragment>
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>
              <Link to={`user/${user.id}`} >
                
                id: {user.id} name: {user.name}
                
              </Link>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default UserList;
