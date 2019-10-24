import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Todos from './components/Todos';
import AddTodoForm from './components/AddTodoForm';
import uuid from 'uuid';
import WelcomeSide from './components/WelcomeSide';





class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4 (),
        title: 'Get out of bed',
        completed: true,
        date: '2015-11-25'
      },
      {
        id: uuid.v4 (),
        title: 'Brush teeth',
        completed: false,
        date: '2015-11-25'
      },
      {
        id: uuid.v4 (),
        title: 'Eat breakfast',
        completed: false,
        date: '2015-11-25'
      },
    ],

    numberOfTodos: undefined,
  };
  setTodos = () => {
    this.setState ({numberOfTodos: this.state.todos.length});
  };

  addTodo = (title, date) => {
    const newTodo = {
      id: uuid.v4 (),
      title,
      date
    };
    this.setState ({todos: [...this.state.todos, newTodo]});
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

  delete = id => {
    this.setState ({
      todos: [...this.state.todos.filter (todo => todo.id !== id)],
    });
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

            <AddTodoForm
              addTodoForm={this.addTodo}
              numberOfTodos={this.state.numberOfTodos}
              todos={this.state.todos}
              countCompletedTodos={this.countCompletedTodos}
            />

            <ul id="ul-of-todos">
              <Todos
                todos={this.state.todos}
                date={this.state.date}
                checked={this.checked}
                delete={this.delete}
              />
            </ul>

          </div>
        </div>

      </div>
    );
  }
}

export default App;
