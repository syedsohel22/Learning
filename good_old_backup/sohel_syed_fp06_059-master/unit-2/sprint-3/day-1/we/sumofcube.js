/**
 Given an array of numbers find the sum of cubes if the number is divisible by 3 Sample Input - [1, 2, 3, 4, 5, 6] Sample Output - 243 (27+216)
 */

 let arr=[1, 2, 3, 4, 5, 6];
 let divisibleBy3=function (el){
    return el%3==0
 }

 let res=arr.filter(divisibleBy3).reduce(function (acc, el){
    return acc+el**3
 },0)
 console.log(res)