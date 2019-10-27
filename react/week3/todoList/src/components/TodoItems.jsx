import React, {Component} from 'react';
import EditTodo from './EditTodo';

class TodoItems extends Component {
  constructor() {
    super();
    this.editTodo = this.toggleForm.bind(this);
    // this.saveTodo = this.saveTodo.bind(this);
  }

  state = {
    inEdit: false,
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
    const {id, editTodo} = this.props;
    const newTodoDescription = event.target.description.value;
    editTodo(id, newTodoDescription);
    this.setState({
      inEdit: false,
    });
  };


  // Still working on the edit part!
  render() {
    const {id, description, deadline} = this.props.todo;
    // console.log(this.props.description);
    return (
      <li style={this.getStyle()}>
        {!this.state.inEdit ? (
          <span>
            {description}
            {deadline}
          </span>
        ) : (
          <form onSubmit={this.props.saveTodo}>
            <input name="description" type="text" defaultValue={description} />
            <button>Done</button>
          </form>
        )}

        <EditTodo toggleForm={this.toggleForm} />
        <button onClick={this.props.delete.bind(this, id)}>Delete</button>

        <input
          type="checkbox"
          onChange={this.props.checked.bind(this, id)}
          checked={this.props.todo.completed}
        />
      </li>
    );
  }
}

export default TodoItems;
