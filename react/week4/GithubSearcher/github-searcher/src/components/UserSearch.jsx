import React, {Component} from 'react';
import * as API from '../api';
import UserItem from './UserItem';
import Loader from './Loader';
import LanguageContext from '../contexts/StateContext';
import ContextStates from '../contexts/StateContext';

import NoResult from './NoResults';
import './UserItem.css';

class UserSearch extends Component {
  static contextType = LanguageContext;

  state = {
    userName: ContextStates.userName,
    users: ContextStates.users,
    isLoading: ContextStates.isLoading,
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
      this.context.states.language === 'english' ? 'Type' : 'irj';

    console.log(this.context);
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
          <div className="ui grid">
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
