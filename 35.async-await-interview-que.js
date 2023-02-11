/*
    Question-1.
    -----------
    que-> Find output?
*/

// async function inc(x) {
//   x = x + (await 1);
//   return x;
// }

// async function increment(x) {
//   x = x + 1;
//   return x;
// }

// inc(1).then(function (x) {
//   increment(x).then(function (x) {
//     console.log(x);
//   });
// });

/*
    Question-2.
    -----------
    que-> Find output?
*/

// let p = new Promise(function (resolve, reject) {
//   reject(new Error("new Error"));
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
   sollution.
   ----------
*/

// let p = new Promise(function (resolve, reject) {
//   reject(new Error("new Error"));
//   setTimeout(function () {
//     reject(new Error("some error"));
//   }, 1000);
//   reject(new Error("some error"));
// });

// p.then(function (err) {
//   console.log(1);
//   console.log(err);
// }).catch(function (err) {
//   console.log(2);
//   console.log(err);
// });

/*
   Explanation.
   ------------
   -> promise got rejected so directly it should go to catch statement and print "2 error".
        -> but it will print "1 error" i.e execute .then 
        -> because then has 2 functions
             * success callback
             * failure callback
        -> p.then(null, function (err) -> we passed null in success callback and function in failure callback 
             * so it moved in .then
    ->  so now we removed null -> p.then(function (err) -> now it is success callback.
        -> it will print "1,err"   
*/

/*
    Question-2.
    -----------
    que-> Find output?
*/

async function f1() {
  console.log(1);
}

async function f1() {
  console.log(2);
}

console.log(3);
f1();

console.log(1);
f2();

async function f2() {
  console.log("Go!");
}

/*
    Question-3
    ----------
    que-> find the output?
*/

// function resolveAfterNSeconds(n, x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, n);
//   });
// }

// (function () {
//   let a = resolveAfterNSeconds(1000, 1);
//   a.then(async function (x) {
//     let y = await resolveAfterNSeconds(2000, 2);
//     let z = await resolveAfterNSeconds(1000, 3);
//     let p = resolveAfterNSeconds(2000, 4);
//     let q = resolveAfterNSeconds(1000, 5);
//     console.log(x + y + z + (await p) + (await q));
//   });
// })();
