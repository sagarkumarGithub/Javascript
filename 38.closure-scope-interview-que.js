/*
    -------------------------------
      Question-1 (based on closure)
    -------------------------------  
    que -> find the output ?
*/

// (function immediateA(a) {
//   return (function immediateB(b) {
//     console.log(a); // What is logged?
//   })(1);
// })(0);

/*
   Explanation
   ------------
   value of a is comming from parrent immediateA where we passes 0.
*/

/*
    -------------------------------
      Question-2 (based on scope)
    -------------------------------  
    que -> find the output ?
*/

// let count = 0; // globally declared
// (function immediate(){
//     if(count === 0){
//         let count = 1; // locally declared inside block.
//         console.log(count); // What is logged. -> comming from local scope
//     }
//     console.log(count); // What is logged. -> comming from global scope
// })()

/*
    -------------------------------
      Question-3 (based on scope)
    -------------------------------  
    que -> find the output ?
*/

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged

/*
   Explanation
   ------------
   count is incresing inside the function scope not in the createIncrement scope.
*/

/*
    -------------------------------
      Question-4 (based on closure)
    -------------------------------  
    que -> find the output ?
*/

// problem
//---------

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

// sollution-1
//-------------

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

// sollution-2
//--------------

// for (var i = 0; i < 3; i++) {
//   delay(i);
// }

// function delay(i) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }
