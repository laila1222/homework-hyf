import React, {Component} from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      status: '',
    };
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  addTodo = () => {
    if (this.state.title === '') {
      this.setState({status: 'You have to fill the field!'});
    } else {
      console.log(this.state.title);
      this.props.addTodo(this.state.title);
      this.setState({status: 'Task has been added.'});
    }
  };

  render() {
    return (
      <div>
        <p>
          You have alltogether {this.props.todos.length} todos.<br></br>{' '}
          {this.props.countCompletedTodos()}{' '}
        </p>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.onChange}
        />
        <p>{this.state.status}</p>
        <button onClick={this.addTodo}>Add Todo</button>
        <p>{this.props.numberOfTodos}</p>
      </div>
    );
  }
}

export default AddTodo;
