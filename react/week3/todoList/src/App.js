import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import WelcomeSide from './components/WelcomeSide';
// import AddTodoForm from './components/AddTodoForm';
// import TodoItems from './components/TodoItems';
// import Loading from './components/Loading';
import Todos from './components/Todos';


class App extends Component {
    

    

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
                        <WelcomeSide  />
                    </div>
                    
                    <div className="parts todo-side white">
                        <Header />
                        <Counter />
    
                        {/* <AddTodoForm
                            addTodoForm={this.addTodo}
                            numberOfTodos={this.state.numberOfTodos}
                            todos={this.state.todos}
                            countCompletedTodos={this.countCompletedTodos}
                        /> */}
                        {/* {this.state.isLoading && <Loading />} */}
                        <ul id="ul-of-todos">
                            <Todos />

                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default App;