import React from 'react'

class UpdatingStateOnEvent extends React.Component {
    constructor(props) {
        super(props);
        // The initial state of our component is defined in the constructor
        // any info our component needs to track and change lives in state
        this.state = {
            name: 'Barry'
        }
    }

    // A custom function that uses setState to update the components state
    // used as an onClick event
    makeMeLarry = () => {
        // this.setState must be used when we want to make a change to our
        // components state, without it, react will not know anything has
        // changed and will not be able to re-render our component
        this.setState({
            name: 'Larry'
        })
    }

    // render contains our component's output - we can display data from state
    // inside a set of markers using this.state.keyFromState
    render() {
        return (
            <div>
                <h2>{ this.state.name }</h2>
                {/* makeMeLarry is used as an event handler on the button */}
                <button onClick={ this.makeMeLarry }>Make me Larry!</button>
            </div>
        )
    }
}
