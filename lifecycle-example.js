import React from 'react'

class LifecycleExample extends React.Component {
    // The constructor is the first bit of code to run when using a component
    // Passing in props makes them available in this class
    // https://reactjs.org/docs/react-component.html#constructor
    constructor(props) {
        super(props);
        // We can use the constructor for any setup that does not depend on
        // the DOM having loaded - most commonly this is setting up state

    }

    // componentDidMount is the lifecycle method that runs when a component
    // is mounted (displayed for the first time) - used for setup that depends
    // upon the DOM existing, or anything async such as fetch requests
    // https://reactjs.org/docs/react-component.html#componentdidmount
    componentDidMount = () => {

    }

    // componentDidUpdate is called automatically when a component has been
    // updated and can be used to make a component re-render when data passed
    // to it by it's parent changes
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    componentDidUpdate = (prevProps, prevState) => {
        // Crucial that you wrap any setState calls in a condition in componentDidUpdate
        // to avoid an infinite loop
        if (this.props.example !== prevProps.example) {
            this.setState({
                example: this.props.example
            })
        }
    }

    // render is where we define what the component actually looks like
    // Our JSX lives within the return statement
    render = () => {
        return (
            <div>{this.state.example}</div>
        )
    }
}
