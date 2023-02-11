/*
    Set time out and set time interval 
    ----------------------------------

    * set Time Out
    ---------------
    - it is not function of javascript. it is provided by environment on which js is run.
    - node or browser provide set Time Out.


    
    - Set time out is a function that take a function in a callback and execute that function when we want(after some interval of time).
*/

function greet() {
  console.log("hello sagar");
}
// greet();
// it will call the function immediately.

// setTimeout(greet, 2000);
// it will call the function with delay of 2ms.

// console.log("byee");
// it will be printed before setTimeout.

/*
--------------------------------------------------------
                call stack 
--------------------------------------------------------

 three things are userd for js code
   1. call stack
   2. node api
   3. call back queue

   * event loop

   -> greet function is called through setTimeOut . and it is node function.
      it will move on nod api.
   -> console.log("byee") will move on call stack and it will run first.  
   -> after printing console.log(byee) now call stack is empty and now its time for event loop and call back queue.
      till that settimeout() will wait in callback queue. now settimeout will enter in call stack and print after waiting given mentioned time.

*/

/*
    setTimeInterval
    ----------------
  * it will execute the function in certain interval of time period.
  * there is no use case for running this method infinatly so for that there is method
    clear interval.   
  * setInterval or set timeout has an id when it is called and return an id and we can destroy that method
    with that id.
*/

console.log("---------------------------------------------");
// function sayHii() {
//   console.log("Hii");
// }
// setInterval(sayHii, 1000);

let counter = 0;
let inervalId;

function sayHii() {
  counter++;
  console.log("Hii");

  if (counter >= 3) {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(sayHii, 1000);

console.log("----------------------------------------------");

// polyfill of setInterval with the help of setTimeOut.
//-------------------------------------------------------
