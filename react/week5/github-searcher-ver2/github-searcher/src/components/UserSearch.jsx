import React from 'react';
import * as API from '../api';
import ErrorText from './ErrorText';
// import {BrowserRouter as Link} from 'react-router-dom';
import UserItem from './UserItem';
import '../index.css';
import './UserSearch.css';
import Headline from './Headline';
import Header from './Header';
import LangConsumer from '../contexts/LanguageContext'
import { LangProvider }  from '../contexts/LanguageContext';
import Loader from './Loader';

class UserSearch extends React.Component {
  state = {
    users: [],
    userName: '',
    isLoading: false,
    errorText: '',
  };

  inputRef = React.createRef();

  async getFetchData() {
    this.setState({isLoading: true});
    const response = await API.fetchUser(this.state.userName);
    if (typeof response === 'string') {
      this.setState({errorText: response});
    }
    const users = response.items;
    this.setState({users, isLoading: false});
    if (this.state.users.length === 0) {
      this.setState({errorText: 'No results'});
    }
  }

  handleFormSubmit = event => {
    this.setState({errorText: ''});
    event.preventDefault();
    if (!this.inputRef.current.value) {
      this.setState({
        errorText: 'Ho, you need to give me a name to search for!',
      });
    } else {
      this.setState(
        {userName: this.inputRef.current.value, isLoading: true},
        () => this.getFetchData()
      );
    }
  };

  render() {
    return (
      // <LangContext.Consumer value={this.state.value} >
      <React.Fragment>
        {/* <LangProvider>
          <LangConsumer>
          {({ lang }) => <h1>The language is {lang}</h1>}
          </LangConsumer>
          </LangProvider>
        <Header /> */}
        <div>
          <div id="search-bar">
            <div className="to-center">
            {/* {({ language }) => <h1>Language is  {language}</h1>} */}
              
              <form onSubmit={this.handleFormSubmit} className="ui search">
                <div className="ui icon input">
                  <input
                    className="prompt"
                    type="text"
                    name="userName"
                    ref={this.inputRef}
                    placeholder="Search..."
                  />
                </div>
                <div id="button-container">
                  <button className="ui button prompt" type="submit">
                    Search
                  </button>
                </div>
                
              </form>
            </div>
          </div>

          <div className="container">
            {this.state.isLoading && <Loader />}
            {this.state.errorText && <ErrorText error={this.state.errorText} />}
            <div id="users-container" className="ui four column grid ">
              {this.state.users.map(user => (
                <UserItem
                  key={user.id}
                  login={user.login}
                  avatar_url={user.avatar_url}
                  url={user.url}
                  score={user.score}
                  type={user.type}
                  id={user.id}
                />
              ))}
            </div>
          </div>
        </div>
        
        
      
      </React.Fragment>
    );
  }
}

export default UserSearch;
