import React, {Component} from 'react';
import TodoItems from './TodoItems';
import * as API from '../api';

class Todos extends Component {
  state = {
    todos: [],
    numberOfTodos: undefined,
    isLoading: true
  };

  delete = id => {
    this.setState ({
        todos: [...this.state.todos.filter (todo => todo.id !== id)],
    });
};

checked = id => {
    this.setState ({
        todos: this.state.todos.map (todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
        }),
    });
  };

  async componentDidMount () {
    const todos = await API.getTodos();
    this.setState({ todos, isLoading: false }); 
    console.log(this.state.todos);
  }
 
  
  render() {
    console.log(this.state.todos)
    return this.state.todos.map(todo => (
      <TodoItems
        key={todo.id}
        todo={todo}
        date={todo.date}
        checked={this.checked}
        delete={this.delete}
      />
    ));
  }
}

export default Todos;
