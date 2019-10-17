import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        "id": uuid.v4(),
        "title": "Get out of bed",
        "completed": false
      },
      {
        "id": uuid.v4(),
        "title": "Brush teeth",
        "completed": false
      },
      {
        "id": uuid.v4(),
        "title": "Eat breakfast",
        "completed": false
      }
    ],

    numberOfTodos: undefined,
    
  };
  setTodos = () => {
    this.setState({numberOfTodos: this.state.todos.length});
  }
  
  getNumberOfTodos = () => {
    let numberOfTodos = this.state.todos.length;
    // if (this.state.todos.length < 1) {
    //   numberOfTodos = 'Nothing to do';
    // } else {
    //   numberOfTodos = this.state.todos.length;
    // }

    this.setState({ numberOfTodos });
  
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
    this.getNumberOfTodos();
    
  }

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

  delete = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
    this.getNumberOfTodos();
    console.log('delete run')
  };


  // componentWillMount () {
  //   this.addTodo();
  //   console.log('from componentWillMount')
  // }

  // componentWillUnmount() {
  //   this.delete();
  //   console.log('froom will UNMOUNT')
  // }

  setTodos();



  render () {
    return (
      <div>
         <Header />
         <Counter />
         <AddTodo addTodo={this.addTodo} numberOfTodos={this.state.numberOfTodos}/>
         <Todos todos={this.state.todos} checked={this.checked} delete={this.delete} getNumberOfTodos={ this.state.numberOfTodos }/>
      </div>
    );
  }
  
}

export default App;
