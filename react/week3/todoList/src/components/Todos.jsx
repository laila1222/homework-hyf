import React, {Component} from 'react';
import TodoItems from './TodoItems';
import AddTodoForm from './AddTodoForm';
import uuid from 'uuid';
import * as API from '../api';

class Todos extends Component {
  state = {
    todos: [],
    numberOfTodos: undefined,
  };

  delete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
    console.log(this.state.todos);
  };

  checked = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  addTodo = (description, deadline) => {
    const newTodo = {
      id: uuid.v4(),
      description,
      deadline,
      completed: false,
    };
    this.setState({todos: [...this.state.todos, newTodo]});
  };

  countCompletedTodos = () => {
    let completedTodos = [];
    completedTodos = [...this.state.todos.filter(todo => todo.completed)];
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

  handleEditTask = (id, newTodoDescription) => {
    const index = this.state.todos.findIndex(todo => todo.id === id);
    const newArray = [...this.state.todos];
    newArray.splice(index, 1, {
      ...newArray[index],
      description: newTodoDescription,
    });
    this.setState({
      todos: newArray,
    });
  };

  handleSave = (description, deadline, id) => {
    console.log(description, id);
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.description= description;
          todo.deadline = deadline;
        } 
        return todo;
      })
    })
  }

  async componentDidMount() {
    const todos = await API.getTodos();
    // Add completed property for the todos
    for (let todo of todos) {
      todo.completed = false;
    }

    this.setState({todos});
  }

  render() {
    console.log(this.state.todos);
    return (
      <div>
        <AddTodoForm todos={this.state.todos} addTodo={this.addTodo} />
        {this.state.todos.map(todo => (
          <TodoItems
            key={todo.id}
            todo={todo}
            description={todo.description}
            deadline={todo.deadline}
            checked={this.checked}
            delete={this.delete}
            editTask={this.handleEditTask}
            handleSave={this.handleSave}
          />
        ))}
      </div>
    );
  }
}

export default Todos;
