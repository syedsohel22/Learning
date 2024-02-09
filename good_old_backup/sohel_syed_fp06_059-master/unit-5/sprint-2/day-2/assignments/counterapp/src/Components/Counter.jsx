import React,{useState} from 'react'
import { handleIncrement } from '../Redux/action'
import {store} from "../Redux/store"
import { handleIncrement,handleDecrement } from '../Redux/action'

const Counter = () => {
    const {dispatch}=store;
    const [set,setState]=useState(0);
    forceUpdate=()=>setState(prev=>prev+1)

  return (
    <div>
        <h1>Counter</h1>
        <button onClick={()=>{dispatch(handleIncrement())}}>+</button>
        <button onClick={()=>{dispatch(handleDecrement())}}>-</button>
    </div>
  )
}

export default Counter