import React from 'react';

class ActiveMenu extends React.Component {
    state= {
        url: ''
    }
    activeMenuName = this.props.activeMenuName;

    fetchData () {

    }
    
    // renderSwitch (activeMenuName) {
    //     switch (activeMenuName) {
    //         case 'Repositories':
    //             this.setState({url: 'state change url'})
    //             console.log('repos', this.state.url);
    //             return <p>{this.state.url}</p>
    //         break;
    //         case 'Projects':
    //             console.log('project');
    //         break;
    //         case 'Stars':
    //             console.log('stars');
    //         break;
    //         case 'Followers':
    //             console.log('folloewrs');
    //         break;
    //         case 'Following':
    //             console.log('follwing');
    //         break;
    //         default:
    //             console.log('default');

    //     }
    // }



    render () {
        console.log(this.props.user);
        console.log(this.state.url);
        const { followers_url, following_url, starred_url, repos_url } = this.props.user;
        return (
            <div>
                <h2>{this.props.activeMenuName}</h2>
                 <p>
               
                 </p>
                 {}
                
                
            </div>
        )
    }
}

export default ActiveMenu;