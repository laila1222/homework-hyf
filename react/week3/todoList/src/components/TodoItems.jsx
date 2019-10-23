import React, {Component} from 'react';

class TodoItems extends Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const {id, title, date} = this.props.todo;
    console.log(id, title, date);
    return (
      <li style={this.getStyle()}>
        <input
          type="checkbox"
          onChange={this.props.checked}
          checked={this.props.todo.completed}
        />
        {title} { }
        {date}
        <button onClick={this.props.delete}>Delete</button>
      </li>
    );
  }
}

export default TodoItems;
