import React from 'react';
import * as API from '../api';
import StateContext from '../contexts/index';
import ErrorText from './ErrorText';

class UserSearch extends React.Component {
    state = {
        users: StateContext.users,
        userName: '',
        isLoading: StateContext.isLoading,
        errorText: '' 
    }

    inputRef = React.createRef();

    async getFetchData () {
        
            this.setState({isLoading: true});
            const response = await API.fetchUser(this.state.userName);
            if (typeof(response) === 'string') {
                this.setState({errorText: response});
                console.log(response);
            } 
            
            this.setState({users: response});
            console.log(this.state.users);
            if (this.state.users.total_count === 0) {
                this.setState({errorText: 'No results'});
            }
        
    }

    // handleInputChange = event => {
    //     this.setState({[event.target.name]: event.target.value, isLoading: true }, () => this.getFetchData())
    // }

    handleFormSubmit = event => {
        this.setState({errorText: ''});
        event.preventDefault();
        if (!this.inputRef.current.value) {
            this.setState({errorText: 'Ho, you need to give me a name to search for!'});
            console.log('type a name!')
        } else {
            this.setState({ userName: this.inputRef.current.value, isLoading: true }, () => this.getFetchData());
            console.log(this.inputRef.current.value);
        }
        
    }

    // forceUpdateSearch = () => {
    //     console.log('updated');
    //     this.forceUpdate();
        
    // }

    

    render () {
        return (
            <div>
                <h1>Search for a Github user</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <input type="text" name="userName" ref={this.inputRef}/>
                    <button type="submit">Search</button>
                    { this.state.errorText && <ErrorText error={this.state.errorText} />}
                </form>
                
            </div>
            
        )
    }
}

export default UserSearch;