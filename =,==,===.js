/*
= --> equal refers to simply the assignment, it just for using the storing some values into the variables

== --> This operator refers to the comparison operator, which compares the values of the operators rather to compare for the types.

=== -->  This operator is a strict equality operator in JavaScript. It compares both the values and the
types of the operands. If the values and types are the same, it returns `true`, otherwise it returns
`false`.
*/

let a = 12;
let b = "13";

console.log(typeof a);
console.log(typeof b);

if (a == b) {
  console.log("equal hai");
  return true;
} else {
  console.log("equal nahi hai");
  return false;
}

let c = 34;
let d = "34";

if (c === d) {
  console.log("dono barabar hai");
} else {
  console.log("barabar nahi hai");
}
