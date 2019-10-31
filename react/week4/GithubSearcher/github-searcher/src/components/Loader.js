import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Loader extends React.Component  {
    static contextType = LanguageContext;
    render() {
        const text = this.context === 'english' ? 'Loading...' : 'Betöltés...';
        return <div>{text}</div>;
    }
    
}

export default Loader;