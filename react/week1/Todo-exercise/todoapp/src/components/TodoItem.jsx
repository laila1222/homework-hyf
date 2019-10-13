import React, {Component} from 'react';

class TodoItem extends Component {
  getCrossed = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const {id, title, deadline} = this.props.todo;
    return (
      <div style={this.getCrossed()}>
        <p className="todoItem">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}
          {'\n'}
          {deadline}
          <button onClick={this.props.deleteItem.bind(this, id)}>Remove</button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
