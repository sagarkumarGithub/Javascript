/*
    Curring
    -------
    * It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 
    * we can make a copy of a function or curry is known as curring.
    * function curry how we make a copy of a function and call for different parameter.
    * two method:
        1. with bind method.
        2. with clousure.
*/

// normal function
// function add(a, b) {
//    console.log(a + b);
// }
// add(2, 5);

/*
   currring with bind
   -------------------
*/

// in this function this refers to add function and 2 refers to 'first' parameter of add function.
let addWith2 = add.bind(this, 2); // curring with the help of bind function.
addWith2(8);

/*
   currring with closure
   ---------------------
*/

function add(x) {
  return function (y) {
    console.log(x + y);
  };
}

let addWith5 = add(5);
addWith5(3);
