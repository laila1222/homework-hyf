import React from 'react';
import './UserProfile.css';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="light-color">
        <Link to={'/'}>
          <i className="github alternate icon" />
          <h2 id="logo">Github Searcher</h2>
        </Link>
        <form className="ui form">
          <div id="header-search" className="field">
            <input
              className="prompt"
              type="text"
              name="userName"
              placeholder="Search user..."
            />
          </div>
        </form>
      </header>
    );
  }
}

export default Header;
