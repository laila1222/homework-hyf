import React, { Component } from 'react';

class TodoItems extends Component {
    
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    }

    render () {
        const { id, title } = this.props.todo;
        return (
            <li style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.checked.bind(this, id)} />
                 { title }
                <button onClick={this.props.delete.bind(this, id) }>Delete</button>
            </li>
        )
    }
}

export default TodoItems;