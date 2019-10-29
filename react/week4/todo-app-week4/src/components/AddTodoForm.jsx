import React, { Component } from 'react';
import Input from './Form/Input';
import Label from './Form/Label';

class AddTodoForm extends Component {

    handleInputChange = event => {
        console.log('inputChange')
    }

    handleSubmit  = event => {
        event.preventDefault();
        console.log('submitted');
    }

   

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <Label title="Add todo">
                    <Input
                        type="text"
                        name="description"
                        onChange={this.handleInputChange}
                    />
                </Label>
            </form>
        )
    }
}

export default AddTodoForm;