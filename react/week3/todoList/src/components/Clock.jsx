import React, {Component} from 'react';

class Watch extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  componentDidMount() {
    this.clock = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  render() {
    return (
      <div className="center text-center">
        <h2 id="clock" className="">
          {this.state.date.toLocaleTimeString()}
        </h2>
        <h2 className="welcome-text">Welcome back</h2>
      </div>
    );
  }
}

export default Watch;
