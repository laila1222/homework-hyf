import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class NoResult extends React.Component{
    static contextType = LanguageContext;
    
    render() {
        const text = 
            this.context === 'english' ? 'No result' : 'Nincs találat'
        return (
            <div>{text}</div>
        )
    }
    
}

export default NoResult;