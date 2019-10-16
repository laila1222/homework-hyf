import React, { Component } from 'react';

class TodoItems extends Component {
    render () {
        console.log(this.props.todo)
        const { title } = this.props.todo;
        return (
            <li>
                 { title }
            </li>
        )
    }
}

export default TodoItems;