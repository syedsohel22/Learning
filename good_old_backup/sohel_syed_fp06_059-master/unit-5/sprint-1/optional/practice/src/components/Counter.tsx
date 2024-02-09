import React from 'react'

interface CounterProps{
    increment:()=>void,
    decrement:()=>void,

}

const Counter = (props:CounterProps) => {
  return (
    <div>
        <button onClick={props.increment}>Inc</button>
        <button onClick={props.decrement}>Inc</button>
    </div>
  )
}

export default Counter
// type Todo={
//     id?:number,
//     title:string,
//     status:boolean
// }