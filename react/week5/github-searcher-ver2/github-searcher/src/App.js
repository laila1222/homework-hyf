import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import UserSearch from './components/UserSearch';
import UserProfile from './components/UserProfileComponents/UserProfile';
import Header from './components/UserProfileComponents/Header';
import Sidebar from './components/UserProfileComponents/Sidebar';
import MainSide from './components/UserProfileComponents/MainSide';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/">

            <UserSearch />

          </Route>

          <Route
            exact
            path="/user/:id/"
            render={({match}) => (
              <UserProfile id={match.params.id}>
                <Header />
                <div id="main-container">
                  <Sidebar id={match.params.id} />
                  <MainSide id={match.params.id} />
                </div>
              </UserProfile>
            )}
          />

        </Switch>
      </Router>
    );
  }
}

export default App;
