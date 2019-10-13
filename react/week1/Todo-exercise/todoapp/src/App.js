import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'washing',
        deadline: '2019-09-26',
        completed: false,
      },
      {
        id: 2,
        title: 'eating',
        deadline: '2019-10-20',
        completed: true,
      },
      {
        id: 3,
        title: 'cooking',
        deadline: '2019-10-05',
        completed: false,
      },
    ],
  };

  markComplete = id => {
    this.setState ({
      todos: this.state.todos.map (todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteItem = id => {
    this.setState ({
      todos: [...this.state.todos.filter (todo => todo.id !== id)],
    });
  };

  render () {
    return (
      <div className="container">
        <Header />
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
