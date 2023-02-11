/*
    
    -------------------------------------
*/

/*
    Question-1.
    ----------
    que -> Arrange the output in sequence order.
*/

// setTimeout(function () {
//   console.log(1);
// });
// setTimeout(function () {
//   console.log(2);
// });
// let p = new Promise(function (resolve, reject) {
//   resolve();
// });
// console.log(3);

// p.then(function () {
//   console.log(4);
// });

// p.then(function () {
//   console.log(5);
// });
// setTimeout(function () {
//   console.log(6);
// });

/*
    Sollution.
    ----------
*/

// setTimeout(function () {
//   console.log(4);
// });
// setTimeout(function () {
//   console.log(5);
// });
// let p = new Promise(function (resolve, reject) {
//   resolve();
// });
// console.log(1);

// p.then(function () {
//   console.log(2);
// });

// p.then(function () {
//   console.log(3);
// });
// setTimeout(function () {
//   console.log(6);
// });

/*
    Explanation.
    ------------

    Execution order.
    ----------------

    1. javascript execute
    2. promises
    3. callback (setTimeOut)
*/

/*
    Question-2.
    -----------
*/

// let p = new Promise(function (resolve, reject) {
//   reject(new Error("some error"));
//   setTimeout(function () {
//     reject(new Error("some error"));
//   }, 1000);
//   reject(new Error("some error"));
// });

// p.then(null, function (err) {
//   console.log(1);
//   console.log(err);
// }).catch(function (err) {
//   console.log(2);
//   console.log(err);
// });

/*
    Sollution.
    ----------
*/

// let p = new Promise(function (resolve, reject) {
//     reject(new Error("some error"));
//     setTimeout(function () {
//       reject(new Error("some error"));
//     }, 1000);
//     reject(new Error("some error"));
//   });

//   p.then(function (err) {
//     console.log(1);
//     console.log(err);
//   }).catch(function (err) {
//     console.log(2);
//     console.log(err);
//   });

/*
    Explanation.
    ------------
*/

/*
    Question-3.
    -----------
    que-> create a SetTimeOut with Promises ?
*/

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log("runs after 3 seconds"));

/*
    Explanation.
    ------------
*/