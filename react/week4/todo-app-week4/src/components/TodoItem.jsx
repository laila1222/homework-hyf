import React, { Component } from 'react';
import Input from './Form/Input';

class TodoItem extends Component {
    constructor (props){
        super(props);
        this.state = {
            inEdit: false,
            description: '',
            deadline: '',
            completed: false,
                
            
        };
        this.save = this.save.bind(this);
        
    }

    toggleEdit = id => {
        console.log('edit', id);
        this.setState({ inEdit : true });

    }

    save = (event) => {
        event.preventDefault();
        const { id } = this.props.todo;
        console.log(id);
        this.setState({ inEdit: false });
        this.props.saveEdited(this.state.description, this.state.deadline, id );
    }
    
    itemStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state.description);
    }


    render () {
        const { description, deadline, id } = this.props.todo;
        // console.log(this.props.todo);
        return (
            <div id={id} style={this.itemStyle()}>
                {!this.state.inEdit ? (
                    <span>
                        <Input 
                            type="checkbox"
                            onChange={this.props.handleChecked.bind(this, id)}
                            checked={this.props.completed}
                        />
                        <span>
                            {description}
                            {' - '}
                            {deadline}
                        </span>

                        <Input 
                            type="button"
                            onClick={this.toggleEdit.bind(this, id)}
                            value="Edit"
                        />

                        <Input 
                            type="button"
                            onClick={this.props.delete.bind(this, id)}
                            value="Delete"
                        />
                    </span>
                ): (
                    <form onSubmit={this.save.bind(this)}>

                        <Input 
                            type="text"
                            name="description"
                            onChange={this.handleInputChange.bind(this)}
                            value={this.state.description}
                        />

                        <Input
                            type="date"
                            name="deadline"
                            onChange={this.handleInputChange.bind(this)}
                            value={this.state.deadline}
                        />

                        <Input 
                            type="submit"
                            value="save"
                            
                        />

                    </form>
                )}

               

            </div>
        )
        
    }
}

export default TodoItem;