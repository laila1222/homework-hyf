import React, {Component} from 'react';

class UserItem extends Component {
  render () {
    // const { login } = this.props;
    return <li>{this.props.login}</li>;
  }
}

export default UserItem;
