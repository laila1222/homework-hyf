import React from 'react';
import * as API from '../../api';
import Header from './Header';
import Sidebar from './Sidebar';
import MainSide from './MainSide';

class UserProfile extends React.Component {
    state ={
        user: []
    }



    async componentDidMount () {
        const response = await API.fetchUser(this.props.id);
        const user = response.items[0];
        console.log(user);
        this.setState({ user })
    }

    render () {
        // console.log(this.props);
        const { login, avatar_url, id, score, type } = this.state.user;
        return (
            <React.Fragment>
                <Header />
                <div id="main-container">
                    <Sidebar avatar_url={avatar_url} login={login} id={id} score={score} type={type} />
                    <MainSide user={this.state.user} />
                </div>
               
            </React.Fragment>
            
        )
    }
}

export default UserProfile;