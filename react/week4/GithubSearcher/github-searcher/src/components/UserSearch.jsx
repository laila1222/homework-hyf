import React, { Component } from 'react';
import * as API from '../api';
import UserItem from './UserItem';

class UserSearch extends Component {
    state = {
        userName: undefined,
        users: []
    };

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
        
    }

    async componentDidMount () {
        console.log(this.state.userName);
        const users = await API.getUsers(this.state.userName);
        const userItems = users.items;
        this.setState({ users: userItems });
        console.log(this.state.users);
    }

    render () {
        return (
            <div>
                <input type="text" name="userName" placeholder="Type Github username" onChange={this.handleInputChange}/>
                {this.state.users.map(user => (
                    <UserItem key={user.id} userName={user.login} />
                ))}
                
            </div>
        )
    }


}

export default UserSearch;