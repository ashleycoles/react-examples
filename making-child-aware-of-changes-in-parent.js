import React from 'react'

class ChildExample extends React.Component {
    constructor(props) {
        super(props)
        // Here we pass the props given to this component by ParentExample
        // into our components initial state
        this.state = {
            loggedIn: this.props.loggedIn
        }
    }

    // Lifecycle method that triggers when parent re-renders and passes new props to child
    // The end result of implementing this is that our ChildExample can detect when it's
    // props have changed, and can trigger itself to re-render
    componentDidUpdate(prevProps) {
        //remember to use an if statement to stop a neverending loop
        if (this.props.loggedIn !== prevProps.loggedIn) {
            // Here we know the prop has changed, so we can set it into our state
            this.setState(
                {
                    loggedIn: this.props.loggedIn
                })
        }
    }

    // This is just calling the method defined in the parent that we passed
    // down via props
    doThing = () => {
        this.props.clicker()
    }

    render() {
        return (
            <div>
                <h1>{ this.state.loggedIn ? 'Logged In' : 'Logged Out' }</h1>
                <button onClick={ this.doThing }>Log me out!</button>
            </div>
        )
    }
}

class ParentExample extends React.Component {
    constructor(props) {
        super(props)
        // We define the initial state in the constructor
        this.state = {
            loggedIn: true
        }
    }

    // The function to be passed as a prop to children
    // This will allow the ChildExample to update the state on
    // this class, which will in turn trickle back down to the
    // ChildComponent 
    handleClick = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        return (
            <div>
                { /* We then pass the data from our state down to the Child as a prop */ } 
                { /* as well as the handleClick function to give the child the ability to update state */ }
                <ChildExample loggedIn={ this.state.loggedIn } clicker={ this.handleClick } />
            </div>
        )
    }
}
