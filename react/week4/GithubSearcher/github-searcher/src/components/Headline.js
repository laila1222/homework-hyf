import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Headline extends React.Component {
  static contextType = LanguageContext;

  render () {
    const text = this.context === 'english'
      ? 'Github User Searcher'
      : 'Github felhasználó kereső';
    return (
      <div>
        <h1>{text}</h1>

      </div>
    );
  }
}

export default Headline;
