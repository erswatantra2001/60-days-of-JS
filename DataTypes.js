// Learn about DataTypes

/*
There are 7 types of datatypes in JS

String, number, boolean, undefined, null, bigint,symbol

*/

let a = 12;  // type of a is number
let myName = "swatantra gupta"; // type of myName is string
let x;  // type of x is undefined
let y = null; // type of y is object
const num1 = BigInt(100000000000000000000000000000000);
const num2 = BigInt(100000000000000n); // adding n to the last is also a notation of bigint
let areYouSatisfied = true;
let key = Symbol("key");

console.log(typeof a);
console.log(typeof myName);
console.log(typeof x);
console.log(typeof y);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof areYouSatisfied);
console.log(typeof key);