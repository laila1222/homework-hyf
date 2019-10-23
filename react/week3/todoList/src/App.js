import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import WelcomeSide from './components/WelcomeSide';
import AddTodoForm from './components/AddTodoForm';
import TodoItems from './components/TodoItems';

class App extends Component {
    state = {
        todos: [],
        numberOfTodos: undefined
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

      componentDidMount () {
          
      }

    render () {
        return (
            <div>
                <div className="container relative">
                    <div className="parts welcome-side white">
                        <WelcomeSide  />
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
                            {this.state.todos.map(todo => (
                                <TodoItems  
                                    key={todo.id}
                                    todo={todo}
                                    date={todo.date}
                                    checked={this.checked}
                                    delete={this.delete}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App;