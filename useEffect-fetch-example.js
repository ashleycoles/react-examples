import React, {useState, useEffect} from 'react';


function Bitcoin() {
    // useState to give us ability to track the bitcoin price in local state
    const [btc, setBtc] = useState(0)
    
    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(res => res.json())
            .then(data => {
                setBtc(parseFloat(data.bpi.GBP.rate_float).toFixed(2))
            })
    }, []) // The empty array as the second param of useEffect makes it run only upon mounting

    return (
        <div>
            <h1>Bitcoin currently costs £{btc}</h1>
        </div>
    )
}
