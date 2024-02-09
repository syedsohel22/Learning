// #2 Given an array of numbers generate an array containing the double value of the numbers

// Sample Input [1, 2] Sample Output [2, 4]

let numsArr=[1,2];
let ans=numsArr.map(function (el){
    return(el*2)
})

console.log(ans)