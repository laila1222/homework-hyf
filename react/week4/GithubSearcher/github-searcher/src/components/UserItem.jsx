import React, {Component} from 'react';
import './UserItem.css';
import LanguageContext from '../contexts/LanguageContext';
import ContextStates from '../contexts/StateContext';





class UserItem extends Component {
  static contextType = LanguageContext;

  render() {
    //  If i used Props
    // const {login, avatar_url, type, id, url, score} = this.props;
    const repoText =
      this.context === 'english'
        ? 'Click to open repository'
        : 'Tovább a tárhelyhez';
    const scoreText = this.context === 'english' ? 'Score' : 'Helyezés';
    
    return (
      <ContextStates.Consumer>
        {({ users }) => {
          return(
            <ul >
              {users.map(user => (
                <div className="ui link cards " id="card-container" key={user.id}>
                  <div className="card">
                    <div className="image">
                      <img alt="avatar" src={user.avatar_url} />
                    </div>
                    <div className="content">
                      <div className="header">{user.login}</div>
                      <div className="meta">{user.type}</div>
                      <div className="description">
                        <p>Id: {user.id} </p>
                        <a href={user.url}>{repoText}</a>
                      </div>
                    </div>
                    <div className="extra content">
                      {scoreText}: {user.score}
                    </div>
                  </div>
                </div>
              ))}
            </ul>
            
            
            
          )
        }}
      </ContextStates.Consumer>
      
    );
  }
}

export default UserItem;
