import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import * as API from './api';

class App extends React.Component {
  //  matchId = () => {
  //   let match = useRouteMatch ();
  //   return match;
  // }

  render () {
    
    return (
      <Router>
        <Switch>
          <Route path="/users">
            <UserList />
          </Route>

          <Route path="/user/:id" exact render={({match}) => <UserProfile id={match.params.id} /> } >
            
          </Route>
        </Switch>
        
      </Router>
    );
  }
}

export default App;
