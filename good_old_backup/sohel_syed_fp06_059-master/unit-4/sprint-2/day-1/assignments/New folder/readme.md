1)what is the difference between Props and State?
Answer=>

Props are used to pass data from one component to another.
The state is a local data storage that is local to the component only and cannot be passed to other components.
The this.setState property is used to update the state values in the component.

PROPS-
1)The Data is passed from one component to another.
2)It is Immutable (cannot be modified).
3)Props can be used with state and functional components.
4)Props are read-only.

STATE-
1)The Data is passed within the component only
2)It is Mutable ( can be modified).
3)State can be used only with the state components/class component (Before 16.0).
4)	State is both read and write.

------------------------------------------------
2)Explain the useState API?
Answer=>
To use useState you need to import useState from react as shown below:

import React, { useState } from "react"

Syntax: The first element is the initial state and the second one is a function that is used for updating the state.

const [state, setState] = useState(initialstate)

 The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.
------------------------------------------------
3)Explain the how map, filter, reduce work.?
Answer=>

Higher Order Functions
A higher-order function is a function that takes one or more functions as arguments or returns a function as its result. map, filter, andreduce are all higher order functions, which take a function as an argument.

Map, Filter, Reduce Fundamentals
All the functions are part of the JavaScript Array prototype which means they must be called directly on an array.

const arr = [1, 2, 3]
arr.map()
arr.filter()
arr.reduce()

When we are using map,filter, and reduce, we cannot:

break the loop
use continue


map → Executes a function on each element of an array

Every element of the array is passed to the callback function and returns a new array with the same length.

When to use map: If we want to perform the same operation/transformation on each element of the array and get back a new array of the same length with the transformed values.

Example 1 :

var numbers= [1,2,3,4,5];
var doubled  = numbers.map(n => n * 2);
doubled; // [2,4,6,8,10]

filter → Remove items which don’t satisfy a condition

Every element of the array is passed to the callback function. On each iteration, if the callback returns true, then that element will be added to the new array, otherwise, it is not added to the new array.

var numbers = [1,2,3,4,5];
var greaterThan2 = numbers.filter(n => n > 2);
greaterThan2; // [3,4,5]

Reduce → Creates a single value from elements of Array

While using reduce, we need to declare the initial value of accumulator(final result). On each iteration, inside the callback we perform some operation and that will be added to the accumulator.

Example 1: Sum of numbers

var numbers = [1,2,3,4,5];
var initialVal = 0;
let result=numbers.reduce((accu, val) => val + accu , initialVal);
console.log(result) // 15

------------------------------------------------
4)Create your own map, filter, reducer methods and attach it to an array using prototype chain.
Answer=>
