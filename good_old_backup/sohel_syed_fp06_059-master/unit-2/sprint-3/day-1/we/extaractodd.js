/* #3
Given an array of numbers extract the numbers which are odd

Sample Input - [1,2,3] Sample Output - [1,3]
*/ 

let arr=[1,2,3];

let res= arr.filter(function (el){
    return el % 2 ==1;

});

console.log(res)