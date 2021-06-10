function App() {
  // useState allows us to create local state in functional components
  // [stateName, functionToChangeState] = useState(initial value)
  const [count, setCount] = useState(0)

  return (
    <div>
        { /* No need to use this.state.count when using useState, just the name of the state will do */ }
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(count + 1)}>
            Click me
        </button>
    </div>
  );
}
