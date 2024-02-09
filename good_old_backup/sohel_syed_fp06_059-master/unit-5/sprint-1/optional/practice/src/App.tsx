import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  const increment=()=>{
    setCount((prev)=>prev+1)
  }
  const deccrement=()=>{
    setCount((prev)=>prev-1)
  }
  return (
    <div className="App">
      <h1>{count}</h1>
        <Counter increment={increment} decrement={deccrement}/>
    </div>
  )
}

export default App
