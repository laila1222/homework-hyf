import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import WelcomeSide from './components/WelcomeSide';

class App extends Component {
  state = {
    todos: [
      {
        "id": uuid.v4(),
        "title": "Get out of bed",
        "completed": true
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
  


  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title
    }
    this.setState({ todos: [...this.state.todos, newTodo]});

    
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

  };

  countCompletedTodos = () => {
    let completedTodos = [];
    completedTodos = [...this.state.todos.filter(todo => todo.completed)];
    const sumTodos = this.state.todos.length;
    return `Number of completed tasks: ${completedTodos.length}
           Number of uncompleted tasks: ${sumTodos - completedTodos.length}`;
  }


  render () {
    return (
      <div>
         
         <div className="container relative">

           <div className="parts welcome-side white">
            <WelcomeSide />
           </div>
           
           <div className="parts todo-side white">
            <Header />
            <Counter />
         
            <AddTodo addTodo={this.addTodo} numberOfTodos={this.state.numberOfTodos} todos={this.state.todos} countCompletedTodos={this.countCompletedTodos}/>
            

            <Todos todos={this.state.todos} checked={this.checked} delete={this.delete} />
           </div>
         </div>
         
      </div>
    );
  }
  
}

export default App;
