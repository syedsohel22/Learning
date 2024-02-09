let arr1: number[] = [1, 2, 3];

arr1.push(4);

//arr1.push("hello");

let arr2: Array<number> = [1, 2, 3];
arr2.push(4);
//arr2.push("hello"); -->error

let arr3: Array<number | string> = [1, 2, 3];
arr3.push(4); //  -->ALL OKAY
arr3.push("hello"); //  -->ALL OKAY

let arr4: readonly string[] = ["A", "B", "C", "D"];

//now arr4 doen't allow push()& pop() oprations

