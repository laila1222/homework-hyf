import React from 'react';
import MenuItem from './MenuItem';
import './UserProfile.css';
import ActiveMenu from './ActiveMenu';

class MainSide extends React.Component {
    state = {
        activeItem: 'Repositories',
        url: '',
        activeMenuName: 'Repositories'

    }

    handleMenuClick = (event ) => {
        this.setState({ activeItem: event.target.name });
        const { repos_url, starred_url, followers_url, following_url } = this.props;

        switch (this.state.activeItem) {
            case 'Repositories':
                this.setState({url: repos_url})
              
            break;
        
            case 'Stars':
                    this.setState({url: starred_url})
                console.log('stars');
            break;
            case 'Followers':
                    this.setState({url: followers_url})
                console.log('folloewrs');
            break;
            case 'Following':
                    this.setState({url: following_url})
                console.log('follwing');
            break;
            default:
                    this.setState({url: repos_url})
                console.log('default');

        }

        console.log(this.state.activeMenu);
    }

   componentDidMount () {
        this.setState({url: this.props.repos_url})   
        console.log(this.props.repos_url); 
    }

    

  
    render () {
        console.log(this.props);
        
        return (
            <div id="mainside-container">
                <div className="ui five item menu">
                    <MenuItem name="Repositories" onClick={this.handleMenuClick}  />
                    <MenuItem name="Stars" onClick={this.handleMenuClick} />
                    <MenuItem name="Followers" onClick={this.handleMenuClick}  />
                    <MenuItem name="Following" onClick={this.handleMenuClick}  />
                </div>
                <div>
                    { this.state.activeItem === 'Repositories' && <ActiveMenu activeMenuName={this.state.activeItem} url={this.props.repos_url} />}
                    { this.state.activeItem === 'Stars' && <ActiveMenu activeMenuName={this.state.activeItem} url={this.props.starred_url} />}
                    { this.state.activeItem === 'Followers' && <ActiveMenu activeMenuName={this.state.activeItem} url={this.props.followers_url} />}
                    { this.state.activeItem === 'Following' && <ActiveMenu activeMenuName={this.state.activeItem} url={this.props.following_url} />}

                    
                </div>
            </div>
        )
    }
}

export default MainSide;