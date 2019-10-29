import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render () {
        const { todos } = this.props;
        return (
            <div>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleChecked={this.props.handleChecked}
                    delete={this.props.delete}
                    saveEdited={this.props.saveEdited}
                />
            ))
            }
            </div>
            
            
        )
    }
}

export default Todos;