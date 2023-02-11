/*
    Guess the output.
    -----------------
*/

// Problem
//---------

// for (var i = 0; i <= 5; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

// I exactly works as.
//---------------------

// let i = 0;
// for (; i <= 5; i++) {
//   setTimeout(function log() {
//     console.log(i);
//   }, 1000);
// }

/*
    -> there will be only 1 global instance of i.
    -> and in each i gets updated and atlast it becomes 6.
    -> after setTimeOut function it takes value of i -> i.e 6.
*/

// sollution - 1.
// ---------------

// for (let i = 0; i <= 5; i++) {
//     setTimeout(function log() {
//       console.log(i);
//     }, 1000);
//   }

// sollution-2. (without let)
//----------------------------

// for (var i = 0; i <= 5; i++) {
//   (function () {
//     var j = i;
//     setTimeout(function log() {
//       console.log(j);
//     }, 1000);
//   })();
// }