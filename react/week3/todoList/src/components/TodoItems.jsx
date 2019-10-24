import React, {Component} from 'react';

class TodoItems extends Component {
  
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const {id, description, deadline} = this.props.todo;
    console.log(id, description, deadline);
    return (
      <li style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.checked}
          checked={this.props.todo.completed}
        />
        {description} { }
        {deadline}
        <button onClick={this.props.delete}>Delete</button>
      </li>
    );
  }
}

export default TodoItems;
