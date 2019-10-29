import React, { Component } from 'react';
import Input from './Form/Input';
import Label from './Form/Label';

class AddTodoForm extends Component {
    state= {
        description: '',
        completed: false
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit  = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.description);
        console.log(this.state.description);
        this.setState({description: ''});
        
    }


    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <Label title="Add todo">
                    <Input
                        type="text"
                        name="description"
                        onChange={this.handleInputChange}
                        required="required"
                    />
                </Label>
            </form>
        )
    }
}

export default AddTodoForm;