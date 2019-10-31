import React, { Component } from 'react';
import * as API from '../api';
import UserItem from './UserItem';
import Loader from './Loader';
import LanguageContext from '../contexts/LanguageContext';

class UserSearch extends Component {
    static contextType = LanguageContext;


    state = {
        userName: undefined,
        users: [],
        isLoading: true,
    };

    async getFetchData () {
        const users = await API.getUsers(this.state.userName);
        const userItems = users.items;
        this.setState({ users: userItems, isLoading: false});

    }

    handleInputChange = event => {
        console.log(event.target.value);
        this.setState({[event.target.name]: event.target.value, isLoading: true}, () => this.getFetchData());   
    }

    

    async componentDidMount () {
            const users = await API.getUsers(this.state.userName);
            const userItems = users.items;
            this.setState({ users: userItems, isLoading: false });
            console.log(this.state.users);
            
            

        
    }

    render () {
        const placeholder = this.context === 'english' ? 'Type Github username' : 'Felhasználó név'
        return (
            
            <div>
                <input type="text" name="userName" placeholder={placeholder} onChange={this.handleInputChange}/>
                {this.state.isLoading && <Loader />}
                {!this.state.users ? (
                    <p>No such user</p>
                ) : (
                    this.state.users.map(user => (
                        <UserItem key={user.id} login={user.login} />
                )
                    
                ))}
                {this.state.error ? (
                    <p>{this.state.error}</p>
                ) : (
                    <p>No error</p>
                )}
                
            </div>
        )
    }


}

export default UserSearch;