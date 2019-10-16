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
        "title": "Get out of bed"
      },
      {
        "id": uuid.v4(),
        "title": "Brush teeth"
      },
      {
        "id": uuid.v4(),
        "title": "Eat breakfast"
      }
    ]
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }


  render () {
    return (
      <div>
         <Header />
         <Counter />
         <AddTodo todos={this.state.todos} addTodo={this.addTodo}/>
         <Todos todos={this.state.todos}/>
      </div>
    );
  }
  
}

export default App;
