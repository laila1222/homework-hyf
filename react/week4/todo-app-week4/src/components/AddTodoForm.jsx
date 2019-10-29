import React, { Component } from 'react';
import Input from './Form/Input';
import Label from './Form/Label';

class AddTodoForm extends Component {

        state = {
            description: '',
            deadline: '',
            completed: false,
            
        };
 

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleDateChange = event => {
        
            this.setState({[event.target.name]: event.target.value});
       
    }

    handleSubmit  = event => {
        event.preventDefault();
        this.props.addNewTodo(this.state.description, this.state.deadline);
        this.setState({description: ''}); 
        this.setState({deadline: ''});
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
                        value={this.state.description}
                    />
                </Label>
                
                <Label title="Due date">
                    <Input 
                        type="date"
                        name="deadline"
                        onChange={this.handleDateChange}
                        required="required"
                        value={this.state.deadline}
                    />
                </Label>
                <Input 
                    name="Sumbit"
                    type="submit"
                    value="Submit"
                />
                
            </form>
        )
    }
}

export default AddTodoForm;