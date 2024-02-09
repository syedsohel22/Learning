import React, { useContext, useState } from 'react'
import { addCounter, DecCounter, divCounter, IncCounter, mulCounter, subCounter,reset } from '../Redux/action';
import { AppContext } from '../Redux/AppContextProvider';


function Counter() {
    const [value,setValue] = useState('')

    const {dispatch,getState} = useContext(AppContext)

    const {counter} = getState();

    const handleInc = ()=>{

        dispatch(IncCounter(1));       
    }

    const handleDec = ()=>{
        dispatch(DecCounter(1));       
    }
    const handleAdd = ()=>{
        dispatch(addCounter(value))

    }
    const handleSub = ()=>{
        dispatch(subCounter(value))
    }
    const handleMul = ()=>{
        dispatch(mulCounter(value))
    }
    const handleDiv = ()=>{

        dispatch(divCounter(value))

    }
    const handlereset = ()=>{

        dispatch(reset())

    }
  return (
    <div style={{width:"20%",marginTop:"250px",marginLeft:"40%",marginBottom:"20%"}}>
        <div>

      <h1>Counter: {counter}</h1>
      </div>

      <div style={{marginTop:"10px"}}>

          <button style={{backgroundColor:"teal", color:"white",border:"none",marginRight:"10px"}} onClick={handleInc}>Increment</button>
          <button style={{backgroundColor:"teal", color:"white",border:"none"}} onClick={handleDec}>Decrement</button>

      </div>

      <input style={{marginTop:"15px"}} type="number" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Enter a number' />
      <div style={{marginTop:"10px"}} >

          <button style={{backgroundColor:"teal", color:"white",border:"none", marginRight:"10px"}} onClick={handleAdd}>Add</button>
          <button style={{backgroundColor:"teal", color:"white",border:"none",marginRight:"10px"}} onClick={handleSub}>Subtract</button>
          <button style={{backgroundColor:"teal", color:"white",border:"none",marginRight:"10px"}} onClick={handleMul}>Multiply</button>
          <button style={{backgroundColor:"teal", color:"white",border:"none",marginRight:"10px"}} onClick={handleDiv}>Divide</button>

      </div>
      <div>

          <button style={{backgroundColor:"teal", color:"white",border:"none"}} onClick={handlereset}>RESET</button>
          
      </div>
    </div>
  )
}

export default Counter;