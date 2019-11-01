import React, {Component} from 'react';
import './UserItem.css';
import LanguageContext from '../contexts/LanguageContext';



class UserItem extends Component {
    static contextType = LanguageContext;
    

    render () {
    //   console.log(this.props);
    const { login, avatar_url, type, id, url, score } = this.props;
    const repoText = 
        this.context === 'english' ? 'Click to open repository' : 'Tovább a tárhelyhez';
    const scoreText = 
        this.context === 'english' ? 'Score' : 'Helyezés' 
    return (
      
            <div className="ui link cards " id="card-container">
                <div className="card">
                    <div className="image">
                        <img alt="avatar" src={avatar_url} />
                    </div>
                    <div className="content">
                        <div className="header">
                            {login}
                        </div>
                        <div className="meta">
                            {type}
                        </div>
                        <div className="description">
                            <p>Id: {id} </p>
                            <a href={url}>{repoText}</a> 
                        </div>
                    </div>
                    <div className="extra content">
                        {scoreText}: {score}
                    </div>
                </div>
            </div>
        
    )}
}

export default UserItem;
