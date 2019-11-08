import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
// import '../pictures/github.png';
import '../index.css';

class Header extends React.Component {
  render() {
    return (
      <header className="bg-dark">
        {/* <img id="logo" src="./search.png" alt="logo" /> */}
      <div className=" d-flex justify-content-between align-items-center">
        <Link to={'/'}>
          <h2 id="logo" className="white-color pl-3 ">Github Searcher</h2>
        </Link>
        <form className="pr-3  mt-2">
          <div id="header-search" className="form-group">
            <input
              className="form-control"
              type="text"
              name="userName"
              placeholder="Search user..."
            />
          </div>
        </form>
      </div>
        
      </header>
    );
  }
}

export default Header;