import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.counter = setInterval(() => {
      this.setState({count: this.state.count + 1});
    }, 1000);
  }

  render() {
    const {count} = this.state;
    return (
      <div>
        <p>You have spent {count} seconds on this page. </p>
      </div>
    );
  }
}

export default Counter;
