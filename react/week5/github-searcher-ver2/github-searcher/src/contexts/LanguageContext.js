import React, { createContext } from 'react';

const LangContext = createContext({
  language: '',
  updateLanguage: () => {},
});

export class LangProvider extends React.Component {
  updateLanguage = newLanguage => {
    this.setState({ language: newLanguage });
  };

  state = {
    language: 'english',
    updateLanguage: this.updateLanguage,
  };

  render() {
    return (
      <LangContext.Provider value={this.state}>
        {this.props.children}
      </LangContext.Provider>
    );
  }
}

const LangConsumer = LangContext.Consumer;
export default LangConsumer;

