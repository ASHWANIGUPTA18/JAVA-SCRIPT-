//primitive
// 7 types of primitive data types
// 1. Number    
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Non-primitive
// 1. Object
// 2. Array
// 3. Function
// return tpe of all is object

// stack - primitive data types
// heap - non-primitive data types

// const id=Symbol('123');
// const id2=Symbol('123');
// console.log(id===id2); //false

let myName="Ashwani";
let myName2=myName;
myName2="Ashu"; //value copy
console.log(myName);
console.log(myName2);

let user={
    name:"Ashwani"
};
let user2=user; //reference copy
user2.name="Ashu";
console.log(user);
console.log(user2);