import React, { Component } from 'react';
import Input from './Form/Input';

class TodoItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            checked: false
        };
        
    }

    


    render () {
        const { description, deadline, id } = this.props.todo;
        return (
            <div id={id}>
                <Input 
                    type="checkbox"
                    onChange={this.props.handleChecked.bind(this, id)}
                    checked={this.props.completed}
                />
                {description}
                {' - '}
                {deadline}
                <Input 
                    type="button"
                    onClick={this.props.delete.bind(this, id)}
                    value="Delete"
                />
            </div>
        )
        
    }
}

export default TodoItem;