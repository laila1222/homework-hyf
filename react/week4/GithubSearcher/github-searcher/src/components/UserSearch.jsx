import React, {Component} from 'react';
import * as API from '../api';
import UserItem from './UserItem';
import Loader from './Loader';
import UserContext from '../contexts/UserContext';
import NoResult from './NoResults';
import './UserItem.css';

class UserSearch extends Component {


  state = {
    userName: UserContext.userName,
    users: UserContext.users,

    isLoading: UserContext.isLoading,
  };

  async getFetchData() {
    const users = await API.getUsers(this.state.userName);
    const userItems = users.items;
    this.setState({users: userItems, isLoading: false});
  }

  handleInputChange = event => {
    console.log(event.target.value);
    this.setState(
      {[event.target.name]: event.target.value, isLoading: true},
      () => this.getFetchData()
    );
    console.log(this.state.users);
  };

  async componentDidMount() {
    const users = await API.getUsers(this.state.userName);
    const userItems = users.items;
    this.setState({users: userItems, isLoading: false});
    
  }

  render() {
    const placeholder =
      this.context === 'english' ? 'Type Github username' : 'Felhasználó név';
    return (
      <div>
        <div className="align-center center">
            <input
            className="ui field "
            type="text"
            name="userName"
            placeholder={placeholder}
            onChange={this.handleInputChange}
            />
        </div>
        
        {this.state.isLoading && <Loader />}
        {!this.state.users ? (
          <NoResult />
        ) : (
          <div className="ui grid" >
            <div className="three column row" id="user-result-container">
              {this.state.users.map(user => (
                <UserItem
                  key={user.id}
                  login={user.login}
                  avatar_url={user.avatar_url}
                  type={user.type}
                  id={user.id}
                  score={user.score}
                />
              ))}
            </div>
          </div>
        )}
        {this.state.error ? <p>{this.state.error}</p> : <p>No error</p>}
      </div>
    );
  }
}

export default UserSearch;
