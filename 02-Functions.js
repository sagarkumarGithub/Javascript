/*
--------------------
     Function
-------------------- 
*/
/*
----------------------------------------------
     Types of Function 
----------------------------------------------
*/
//-------------------------------
// 1. -> Function Statement
// ------------------------------

// * Function defination
function sayHello(param) {
  console.log("Hello..", param);
}
// * Function Invocation
sayHello("sagar");

// in javascript if nothing is passed or return
// then that return undefined

// ----------------------------
// 2. -> Function Expression
// ----------------------------

// Function are treated as a variable
// assignment is possible in function same as variable

// in variable
let a = [1, 2, 3, 4];
let b = a;
console.log(b);

// in function
let fnContainer = function () {
  console.log("I am expression function");
  console.log("I am anonymous function");
  // a fuction whose name is not given
};
fnContainer();

// A variable can be passed in to a function
// Similarly expression functions can be passed
// in to another function

function Greet(param) {
  console.log("Good morning", param);
  return "12345";
}

function smaller() {
  console.log("I am functon inside another function");
}

let rval = Greet(smaller);
console.log(rval);

// A function returns variable
// Similarly expression function can return another 
// function 

function outer(){
    console.log("I am outer function");
    return function inner(){
        console.log("I am inner function");
    }
}

let rvalue = outer();
console.log("Rvalue : ", rvalue);
rvalue();



//-----------------------------------------------------
// 3. -> IIFI (immediately invoked function expresion)
//-----------------------------------------------------

(function fn() {
  console.log("I am IIFI function");
  // IIFI function don not need to be called.
  // It will run on its own
})();

//-----------------------------------------------------
// 4. -> Arrow Function
//-----------------------------------------------------

let arrowFn = (num) => {
  console.log("I am arrow function");
  return num * num;
};
arrowFn(5);

// when we have to write single line of function.
let shortArrowFn = (num) => num * num;
console.log("I am short version of arrow function");

//-------------------------------------------------------

function add(a,b){
  return a+b;
};

var add = (a,b) =>{
  return a+b;
}
console.log(add);

var square = (num) => num * num;
var ans = square(7);
console.log(ans);

var sayHii = () => {
   console.log("Hello everyone");
}
sayHii();

var circumference = (radius) => {
  let ans = 2 * Math.PI * radius;
  console.log(ans);
}
circumference(4);
