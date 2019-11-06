import React from 'react';

class Organizations extends React.Component {
    
    render () {
        const { id, avatar_url, login, url, description } = this.props;
        return (
            <li>
                <img src={avatar_url} alt="avatar"/>
                <h4 key={id}><a href={url}>{login}</a></h4>
                <p>{description}</p>

            </li>
        )
    }
}

export default Organizations;