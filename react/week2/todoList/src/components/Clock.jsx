import React, { Component } from 'react';

class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.clock = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval(this.clock);
    }

    render () {
        return (
            <div>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
                <h2>Good morning</h2>
                
            </div>
        )
    }
}

export default Watch;