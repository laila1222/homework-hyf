import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserSearch from './components/UserSearch';
import UserProfile from './components/UserProfileComponents/UserProfile';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <UserSearch />
            
          </Route>

          <Route exact path="/user/:id" render={({ match }) => <UserProfile id={match.params.id} /> } />
        </Switch>
      </Router>
    );
  }
}

export default App;
