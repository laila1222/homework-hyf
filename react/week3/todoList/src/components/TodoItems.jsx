import React, {Component} from 'react';

class TodoItems extends Component {
  
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, description, deadline } = this.props.todo;
    console.log(this.props.description);
    return (
      <li style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.checked.bind(this , id)}
          checked={this.props.todo.completed}
        />
        {description} { }
        {deadline}
        <button onClick={this.props.delete.bind(this, id)}>Delete</button>
      </li>
    );
  }
}

export default TodoItems;
