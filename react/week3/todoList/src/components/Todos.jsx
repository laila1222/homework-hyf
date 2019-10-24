import React, {Component} from 'react';
import TodoItems from './TodoItems';
import AddTodoForm from './AddTodoForm';
import uuid from 'uuid';
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
    console.log(this.state.todos);
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

  addTodo = (description, deadline) => {
    const newTodo = {
      id: uuid.v4 (),
      description,
      deadline
    };
    this.setState ({todos: [...this.state.todos, newTodo]});
  };

  countCompletedTodos = () => {
    let completedTodos = [];
    completedTodos = [...this.state.todos.filter (todo => todo.completed)];
    const sumTodos = this.state.todos.length;
    let text = '';
    if (sumTodos < 1) {
      text = 'Nothing to do.';
    } else {
      text = `Completed tasks: ${completedTodos.length}
      Uncompleted tasks: ${sumTodos - completedTodos.length}`;
    }

    return text;
  };

  async componentDidMount () {
    const todos = await API.getTodos();
    this.setState({ todos, isLoading: false }); 
    console.log(this.state.todos);
  }
 
  
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <AddTodoForm todos={this.state.todos} addTodo={this.addTodo}/>
        {this.state.todos.map(todo => (
        <TodoItems
          key={todo.id}
          todo={todo}
          description={todo.description}
          deadline={todo.deadline}
          checked={this.checked}
          delete={this.delete}
        /> ))}
      </div>
        
    )
  }
}

export default Todos;
