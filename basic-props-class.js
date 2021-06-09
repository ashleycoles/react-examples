import React from 'react';

// In the following example the ParentExample passes two props down
// to the ChildExample - link and text
// The props are a bit like params to a function, they allow us to
// make reusable components that can be used to display different
// information

class ChildExample extends React.Component {
    // We must remember to pass props into the constructor and through
    // super to get access to them correctly
    constructor(props) {
        super(props);
    }

    // We can access the data sent via props in the render method
    // using this.props.nameOfProp
    render() {
        return (
            <a href={this.props.link}>{this.props.text}</a>
        )
    }
}


class ParentExample extends React.Component {
    constructor(props) {
        super(props);
    }

    // We pass the props to the ChildExample from the ParentExample as 
    // custom attributes, this makes the data available in the 
    // this.props object of the ChildExample
    render() {
        return (
            <ChildExample link="http://google.com" text="Go to google" />
        )
    }
}
