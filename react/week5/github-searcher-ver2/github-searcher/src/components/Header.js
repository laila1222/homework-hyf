import React from 'react';
import LangConsumer from '../contexts/LanguageContext';

class Header extends React.Component {



    onLanguageChange = language => {
        this.setState({ language });
    }


    render () {
        return (
            <LangConsumer>
            <header>
                <div className="ui container">
                    
                        Select a language:
                        <i className="flag us" onClick={()=> this.onLanguageChange('english')} />
                        <i className="flag hu" onClick={()=> this.onLanguageChange('hungarian')}/>
                        <p>Selected language: </p>
                    
                </div>
            </header>
            </LangConsumer>
        )
    }
}

export default Header;