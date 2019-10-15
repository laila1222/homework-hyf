import React, { Component } from 'react';


class Counter extends Component {
    constructor (props) {
      super(props)
      this.state = {
        count: 0,
        isPaused: false,
        buttonModeLabel: 'Pause',
        countTypeLabel: 'Decrement',
        increment: true
      }
    } 

    increment = () => {
        this.setState (prevState => ({
            count: prevState.count + 1
          }))
    }

    decrement = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))
    }

    togglePause = () => {
        clearInterval(this.watchInterval);
        if (!this.state.isPaused) {
            this.setState({ isPaused: true, buttonModeLabel: 'Start'});
        } else {
            this.watchInterval = setInterval(() => {
                this.increment();
              }, 1000);
            this.setState({ isPaused: false, buttonModeLabel: 'Pause'});
        }
        
        
    }
    
    togglecountType = () => {
        if (this.state.increment) {
            clearInterval(this.watchInterval);
            this.watchInterval = setInterval(() => {
                this.decrement();
              }, 1000);
            this.setState({ countTypeLabel: 'Increment', increment: false});
        } else {
            clearInterval(this.watchInterval);
            this.watchInterval = setInterval(() => {
                this.increment();
              }, 1000);
            this.setState({ countTypeLabel: 'Decrement', increment: true});
        }
    }

    reset = () => {
        this.togglePause();
        this.setState({ count: 0, buttonModeLabel: 'Start'});
    }

    componentDidMount() {
        this.watchInterval = setInterval(() => {
          this.increment();
        }, 1000);
        this.setState({ buttonModeLabel: 'Pause'});
        
      }

    componentWillUnmount() {
        clearInterval(this.watchInterval);
      }

    render() {
      
        const { count } = this.state;
        const { buttonModeLabel } = this.state;
        const { countTypeLabel } = this.state;
        return <div>
                  <h1>Current count: {count}</h1>
                  <button onClick={this.togglePause}>{ buttonModeLabel }</button>
                  <button onClick ={this.reset}>Reset</button>
                  <button onClick={this.togglecountType}>{ countTypeLabel }</button>
              </div>;
      }
  }

  

  export default Counter;