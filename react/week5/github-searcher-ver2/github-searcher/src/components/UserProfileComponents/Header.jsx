import React from 'react';
import './UserProfile.css';

class Header extends React.Component {
    render () {
        return (
            <header className="light-color">
                <h2 id="logo">Github Searcher</h2>
                <form  className="ui form">
                    <div id="header-search" className="field">
                        <input type="text" placeholder="Search profile" />
                    </div>
                    
                </form>
                
            </header>
        )
    }
}

export default Header;