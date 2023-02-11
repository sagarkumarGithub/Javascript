/*
    -----------------------
        this keyworrd
    -----------------------        

    -> Behaves different in browser
            -> also behave different in non strict mode.
    -> Behaves different in node
            -> also behave different in strict mode.

    -> Strict mode.
       ------------
       if we code like this 
       a = 3;
       console.log(a); // output -> 3
       
       if we code like this
       'use strict'
       a = 3;
       console.log(a); // show error

*/

/*
         this in browser in non strict mode.
         -----------------------------------
         case-1: console.log(this)                 -> returns window object.
         case-2: function-log                      -> returns window object.
         case-3: object-function                   -> returns object it self. 
         case-4: object-function-function          -> returns window object. 
*/

/*
         this in browser in strict mode.
         -------------------------------
         case-1: console.log(this)                 -> returns window object.
         case-2: function-log                      -> returns undefined.
         case-3: object-function                   -> returns object it self. 
         case-4: object-function-function          -> returns undefined.        
*/

/*
         this in node in non strict mode.
         --------------------------------
         case-1: console.log(this)                 -> returns {} emplty object.
         case-2: function-log                      -> returns global object.
         case-3: object-function                   -> returns object it self. 
         case-4: object-function-function          -> returns global object. 
*/

/*
         this in node in strict mode.
         -----------------------------
         case-1: console.log(this)                 -> returns {} emplty object.
         case-2: function-log                      -> returns undefined. 
         case-3: object-function                   -> returns object it self. 
         case-4: object-function-function          -> returns undefined.
*/

// "use strict";

// case-1:
console.log(this);

// case-2:
function showThis() {
  console.log(this);
}
showThis();

// case-3:
let obj = {
  name: "adam",
  f: function () {
    console.log(this);
  },
};
obj.f();

// case-4:
let obj1 = {
  name: "adam",
  f: function () {
    function g() {
      console.log(this);
    }
    g();
  },
};
obj1.f();

