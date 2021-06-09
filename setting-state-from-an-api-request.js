import React from 'react'

class Freddo extends React.Component {
    constructor(props) {
        super(props);
        // Our initial state is defined in the constructor - this should
        // include all data our component needs to track
        this.state = {
            // Price of a bitcoin
            rate_float : 0,
            // Amount of freddos you can buy
            noOfFreddos : 0,
        }
    }
  
    // componentDidMount is a good place to run a fetch request that our component
    // needs to perform straight away
    componentDidMount() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(data=>data.json())
            .then((data)=>{
                // Once we have the data back from the request we can use it in setState
                // to update our component and automatically display the data in our render
                const rate_float = parseFloat(data.bpi.GBP.rate_float).toFixed(2)
                this.setState({
                    rate_float: parseFloat(data.bpi.GBP.rate_float).toFixed(2),
                    noOfFreddos: parseFloat(rate_float / 0.25)
                })
            })
    }
    render () {
        return (
          { /* Displaying the data out of our state */ }
            <h1>1 Bitcoin = {this.state.rate_float} thats {this.state.noOfFreddos} Freddo Bars</h1>
        )
    }
}
