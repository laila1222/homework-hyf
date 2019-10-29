import React, {Component} from 'react';
import Input from './formElements/Input';

class TodoItems extends Component {


  state = {
    inEdit: false,
    description: '',
  };

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  toggleForm = () => {
    this.setState({inEdit: !this.state.inEdit});
  };

  saveTodo = event => {
    event.preventDefault();
    const { id } = this.props.todo;
    this.props.handleSave( this.state.description, id);
    this.setState({ inEdit: false });
    
    
  };

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };


  // Still working on the edit part!
  render() {
    const {id, description, deadline} = this.props.todo;
    // console.log(this.props.description);
    return (
      <li style={this.getStyle()}>
        {!this.state.inEdit ? (
          <span>
            
            
          <span>
            {description}
            {' - '}
            {deadline}
          </span>

          <Input 
              type="checkbox"
              onChange={this.props.checked.bind(this, id)}
              checked={this.props.todo.completed}
            />
            

          <Input 
            type="button"
            name="delete"
            value="Delete"
            onClick={this.props.delete.bind(this, id)}
          />

          <Input 
            type="button"
            name="edit"
            value="Edit"
            onClick={this.toggleForm}
          />

          </span>
        ) : (
          <form onSubmit={this.saveTodo.bind(this)}>
            <Input
              type="text"
              name="description"
              value={this.state.description} 
              onChange={this.handleInputChange.bind(this)}
            />
            <Input 
              type="submit"
              value="Save"
            />
          </form>
        )}

        
        
      </li>
    );
  }
}

export default TodoItems;
