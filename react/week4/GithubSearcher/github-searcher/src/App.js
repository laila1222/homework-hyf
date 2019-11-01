import React from 'react';
import './App.css';
import Headline from './components/Headline';
import UserSearch from './components/UserSearch';
import LanguageContext from './contexts/LanguageContext';

class App extends React.Component {
  static contextType = LanguageContext;

  state = {
    language: 'english',
  };

  onLanguageChange = language => {
    this.setState ({language});
  };

  render () {
   
    return (
      <div className="ui container">
        <div>
          <h5 className="header d-inline">Select language:</h5>
          <div className="d-inline">
            <i
              className="flag us"
              onClick={() => this.onLanguageChange ('english')}
            />
            <i
              className="flag hu"
              onClick={() => this.onLanguageChange ('hungarian')}
            />
          </div>

        </div>

        <LanguageContext.Provider value={this.state.language}>
          <Headline className="center"/>
          <UserSearch />
        </LanguageContext.Provider>

      </div>
    );
  }
}

export default App;
