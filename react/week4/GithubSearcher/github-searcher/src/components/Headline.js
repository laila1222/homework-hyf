import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import '../App.css';

class Headline extends React.Component {
  static contextType = LanguageContext;

  render () {
    const text = this.context === 'english'
      ? 'Github User Searcher'
      : 'Github felhasználó kereső';
    return (
      <div>
        <h1 className="ui header center">{text}</h1>

      </div>
    );
  }
}

export default Headline;
