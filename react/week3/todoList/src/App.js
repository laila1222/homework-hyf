import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import WelcomeSide from './components/WelcomeSide';


// import Loading from './components/Loading';
import Todos from './components/Todos';


class App extends Component {
    

    

    

      

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