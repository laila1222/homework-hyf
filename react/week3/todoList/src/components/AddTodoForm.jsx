import React, {Component} from 'react';

class AddTodoForm extends Component {
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
    const { title, status } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          You have alltogether {this.props.todos.length} todos.<br></br>{' '}
          {this.props.countCompletedTodos()}{' '}
        </p>
        <Label title="Add todo">
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.onChange}
          />
        </Label>
        
        <p>{status}</p>
        <button onClick={this.addTodo}>Add Todo</button>
        <p>{this.props.numberOfTodos}</p>
      </form>
    );
  }
}

export default AddTodoForm;
