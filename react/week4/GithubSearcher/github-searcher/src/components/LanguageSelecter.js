import React from 'react';
import { states, ContextStates } from '../contexts/StateContext';

class LanguageSelecter extends React.Component {
    state = {
        language: states.language
    };

    onLanguageChange = language => {
        this.setState ({language});
        
      };
    

    render () {
        console.log(states.language);
        return (
            <div>
                <h5 className="header d-inline">Select:</h5>
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
        )
    }
}

export default LanguageSelecter;