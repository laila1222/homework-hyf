import React, { Component } from 'react';
import './App.css';
import Headline from './components/Headline';
import AddTodoForm from './components/AddTodoForm';
import Todos from './components/Todos';
import * as API from './api';
import uuid from 'uuid';

class App extends Component {
   state = {
      todos: []
    }

  

  handleChecked = id => {;
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        } 
        return todo;
        
      })
    })
  };

  delete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  }

  addNewTodo = (description) => {
    console.log('added new todo', description);
    const newTodo = {
      id: uuid.v4(),
      description: description,
      deadline: '2012-12-05',
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
    console.log(this.state.todos);
  }

  async componentDidMount () {
    const todos = await API.getTodos();
    for (let todo of todos) {
      todo.completed = false;
    }
    this.setState({ todos });
    console.log(this.state.todos);
  }

  render () {
    return (
      <div className="App">
        <Headline />
        <AddTodoForm addNewTodo={this.addNewTodo}/>
        <Todos todos={this.state.todos} handleChecked={this.handleChecked} delete={this.delete}/>
      </div> 
    );
  }
  
}

export default App;
