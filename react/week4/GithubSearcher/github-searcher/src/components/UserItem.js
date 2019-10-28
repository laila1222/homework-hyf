import React, { Component } from 'react';

class UserItem extends Component {
    render () {
        
        return (
            <li>{this.props.userName}</li>
        )
    }
    
};

export default UserItem;