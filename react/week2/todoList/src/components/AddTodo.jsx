import React, { Component } from 'react';
import uuid from 'uuid';

class AddTodo extends Component {
    constructor (props) {
        super (props);
        this.state = {
            title: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    addTodo = () => {
        if (this.state.title === '') {
            console.log('you have to write a name');
        } else {
            console.log(this.state.title);
            this.props.addTodo(this.state.title);
        }
        
    }

    render () {
        return (
            <div>
                <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        )
    }
}

export default AddTodo;