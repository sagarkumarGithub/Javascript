/*
----------------------------------------
       Higher order functions
       (map , filter, reduce)         
---------------------------------------- 

   * All are array based function.
   * A function which takes another function as an argument or returns a function is known as a higher order function.  

    1. Map 
    --------
       map([vegetable   ,milk,    chiken            ,corn     ],cook)
       =>  [burger      ,sweet,   chicken-loly-pop  ,puffcorn ]

       ie. map function took vegetables, milk, chiken, corn as array and a function cook
           and returned burger, sweet, chiken-loly-pop, puffcorn respectively.

    2. Filter
    ----------
       filter([chicken-burger, french-fries,chicken-loly-pop,puffcorn], isvegetarian)
       =>     [french-fries,puffcorn ]

    3. Reduce  
    -----------
      filter([chicken-burger, french-fries,chicken-loly-pop,puffcorn], isvegetarian)
      => [💩]

      * it will return you single output among all element of your array.
    
*/

// 1. Map
// --------

// let myArr = [1, 2, 3, 4, 5];
// let mappedArr = myArr.map(function (x) {
//   return x * x;
// });
// console.log(myArr);
// console.log("mapped array: ", mappedArr);

// 2. Filter
// ----------

// let filteredArr = myArr.filter(function (x) {
//   return x % 2 === 0;
// });
// console.log("filtered Array: ", filteredArr);

// 3. Reduce
// -----------

// let reducedArr = myArr.reduce(function (accumulator, x) {
//   return accumulator + x;
// }, 0);
// console.log("Sum is : ", reducedArr);

// let arr = [1, 2, 3, 4, 5];
// let double = arr.filter(function (val) {
  
// });
// console.log(arr);
// console.log(double);
