// var is the keyword or a variable type which can be declared globally and can be accessible globally and hoisting is allowed in this.
var coding = "i am a coder";
console.log(coding);

// Let is also a type of variable which is a block scoped and in this part the hoisting is not allowed.
{
  let myName = "swatantra gupta";
  console.log(myName);
}
console.log(myName); // it will not print and a error throw away as myName is not defined

// const is the another type of variable which is used to store the constants which means that, if we want to store some type of content and want that it will not changed anymore then we used const, it must have value initialized in it and hoisting is not allowed in it
const myAge = 12;
console.log(myAge);
myAge = 13; // it will throws an error that we cannot reinitialized the const variable again.
