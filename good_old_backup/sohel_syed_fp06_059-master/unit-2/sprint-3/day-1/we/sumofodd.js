/*
Given an array of numbers find the sum of odd elements Sample Input - [1, 2, 3, 4] Sample Output - 4
*/
let arr=[1, 2, 3, 4]
let getOdd=function (el){
    return el%2==1;
};

let res =arr.filter(getOdd).reduce(function (acc,el){
    return acc+el
})
console.log(res);