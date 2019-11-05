import React from 'react';

class MenuItem extends React.Component {
    render () {
        return (
            <button className="item" onClick={this.props.onClick} name={this.props.name}>{this.props.name}</button>
        )
    }
}
export default MenuItem;