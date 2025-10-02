import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 10) {
      alert("Counter reached the maximum value: 10 ")
    }
  }, [count])
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
    if(count===10){
      alert("Counter reached the maximum value: 10 ");
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    if(count===0){
      alert("Counter reached the minimum value: 0 ");
    }
  };



  return (
    <>

      <div className="card">
        {count}
        <div className="button1"><button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        </div>
        <button onClick={() => setCount((count) => count = 0)}>
          Reset
        </button>

      </div>

    </>
  )
}

export default App
