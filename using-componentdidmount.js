import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        // Our initial state is defined in the constructor
        this.state = { date: new Date() }
    }

    // Runs when the component is added to the DOM for the first time
    // Used for component setup that depends on the existance of the DOM
    // as well as async function calls like fetch and timers
    componentDidMount() {
        // Starts a 1 second interval timer that triggers the tick() method
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    // Updating the state every with new current date()
    tick() {
        // setState triggers the component to re-render, automatically
        // displaying the new time
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is { this.state.date.toLocaleTimeString() }.</h2>
            </div>
        )
    }
}
