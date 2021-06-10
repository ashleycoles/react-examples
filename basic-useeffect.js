import React, {useState, useEffect} from 'react'

function App() {
    const [count, setCount] = useState(0)
    
    // useEffect replace the three lifecycle methods componentDidMount()/componentDidUpdate()/componentWillUnmount()
    // in this case it runs each time the count state is updated
    useEffect(() => {
        // Update the document title using the browser API each time the count state is updated
        document.title = `You clicked ${count} times`
    })

  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>
            Click me
        </button>
    </div>
  )
}
