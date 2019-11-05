import React from 'react';
import MenuItem from './MenuItem';
import './UserProfile.css';
import ActiveMenu from './ActiveMenu';

class MainSide extends React.Component {
    state = {
        activeItem: 'Repositories',
        url: ''
    }

    handleMenuClick = (event ) => {
        this.setState({ activeItem: event.target.name });
        const user = this.props.user;
        if (event.target.name === 'Repositories') {
            this.setState({ url: this.props.user.repos_url})
        } else if (event.target.name === 'Followers') {
            this.setState({ url: user.followers_url})
        }

    }

    displayActiveMenu = () => {

    }
    render () {
        console.log(this.props.user);
        return (
            <div id="mainside-container">
                <div className="ui five item menu">
                    <MenuItem name="Repositories" onClick={this.handleMenuClick}/>
                    <MenuItem name="Projects" onClick={this.handleMenuClick}/>
                    <MenuItem name="Stars" onClick={this.handleMenuClick}/>
                    <MenuItem name="Followers" onClick={this.handleMenuClick}/>
                    <MenuItem name="Following" onClick={this.handleMenuClick}/>
                </div>
                <div>
                    <ActiveMenu activeMenuName={this.state.activeItem} user={this.props.user}/>
                </div>
            </div>
        )
    }
}

export default MainSide;