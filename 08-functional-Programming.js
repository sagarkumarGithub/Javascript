/*
------------------------------------------
     Functional Programming..
------------------------------------------ 
    * we hava studied :-
       1. procedural programming.
       2. object oriented programming.
       3. functional programming.

    * Functional Programming:-
   -----------------------------
      -> Imperative & declarative code writting.
      -> Pure Functions & their side effect.
      -> mutability and immutability.
*/

// Imperative & declarative code writting.
// ----------------------------------------

// Question -> is square of a number is even ?

// Emperative way:-
const x = 5;
const xSquare = x * x;

let isEven;
if (xSquare % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

// Declarative way:-
const isSquareEven = (x) => ((x * x) % 2 === 0 ? true : false);
console.log(isSquareEven(4));

/*
  Pure Functions & their side effect.
 --------------------------------------

  -> Impure function
  ---------------------
    let a = 5;
    function addNum(b){
        console.log("the sum is : ",a+b);
    }

   * given function is Impure function because it is giving differnt value if we change value of a.
   * function is depending on a external factor i.e a.
   * Rule of functinal programming -> function should be pure function.

*/
/*
    -> Pure function
   ---------------------
     * pure function is function if we call that function with same argument then that should give the same result.
     * function ke result ke alawa uske external factor me koi change nhi aana chahiye.
     * console.log is using external screen and output on that screen.
     * function given the value to that external factor
     
example:-
----------
function addNum(a, b) {
  console.log("sum is ", a + b); //-> side effect
}
addNum(4, 7);
*/

function addNum(a, b) {
  return a + b;
}
console.log(addNum(4, 5));

/*
    mutability and immutability.
----------------------------------
  * mutablilit allow us to change the value during code execution.
  * functional programming suggest to write immutable code.
*/

const user1 = {
  name: "sagar",
  password: 1234,
  balance: 10000,
};
const user2 = user1;
user2.name = "sahil";
user2.password = 4321;

console.log(user1);
console.log(user2);

// How to solve this problem
// -----------------------------

// 1. create new refrence by proving shallow copy
const user3 = Object.assign({}, user1);
user3.name = "prem";
user3.password = 2314;

console.log(user1);
console.log(user2);
console.log(user3);

// 2. using spread operator
const user4 = { ...user1 };
user4.name = "rahul";
user4.password = 6789;

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
