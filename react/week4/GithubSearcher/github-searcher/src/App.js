import React from 'react';
import './App.css';
import Headline from './components/Headline';
import UserSearch from './components/UserSearch';
import LanguageContext from './contexts/LanguageContext';

class App extends React.Component {
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
          Select language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange ('english')}
          />
          <i
            className="flag hu"
            onClick={() => this.onLanguageChange ('hungarian')}
          />
          <p>Current language: {this.state.language}</p>
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <Headline />
          <UserSearch />
        </LanguageContext.Provider>

      </div>
    );
  }
}

export default App;
