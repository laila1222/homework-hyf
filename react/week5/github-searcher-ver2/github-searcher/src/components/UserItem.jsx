import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';

class UserItem extends React.Component {

    render() {
      const { avatar_url, login, id, score, type, url } = this.props;
      const path= `/user/${login}`;
    return (
     
        <div className="column card-padding">
          <div className="ui fluid card" >
            <div className="image">
              <Link to={path} >
              <img alt="avatar" src={avatar_url} id="avatar"/>
              </Link>
            </div>
            <div className="content">
                <Link to={path} >
                    <h4 className="header blue-color">{login}</h4>
                </Link>
                
                <div className="meta ">
                    <span className="light-color">{type}</span>
                </div>
                <div className="description light-color">
                    <p className="light-color">Id: {id}</p>
                    <a href={url} className="blue-color">Repo link</a>
                </div>
            </div>
            <div className="extra content">
                <span className="light-color">Score: {score}</span>
            </div>
          </div>
        </div>
      
    );
  }
}

export default UserItem;
