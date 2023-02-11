/*
    Difference between null , undefined and not defined.
    ----------------------------------------------------

    undefined 
    ---------
    it is provided by the engine when we access that value which is still not assigned, it can be assigned explicitaly.
    it is a data type which is assigned by java script engine for those variable where value does not exist.

    not defined
    -----------
    it is value returned when the varible is not defined or does not exist.

    null
    ----
    null is a value when we have not particular value.
    it is the value which we explicitally assign to those variable which exist but we have not value for that.

    let formObj = {
        firstName:'sagar',
        middleName:null,
        lastName:'kumar'
    }
    console.log(formObj.middleName) -> null
    console.log(formObj.age) -> undefined
*/

// let a = 10;
// console.log(a);

// undefined
//-----------

// hoisting -> using var if value is accesed before assignment.
// value of a will be undefined -> value is not defined till now. i.e -> we have variable but not value.
// console.log(b);
// var b = 10;

// not defined
//-------------

// console.log(c);
// c will show error -> c is not defined i.e variable doesn't exist.

// null value
//------------

// it will return undefined. -> automatically
// function test1() {
//   // returns nothing
// }
// console.log(test1());

// it will return null -> intentionally
// function test2() {
//   return null;
// }
// console.log(test2());

// suppose we use that property from global object that doesn't exist -> will return undefined.
// let c = global.v;
// console.log(c);

// but if we use that object that doesn't exist -> will return not defined.
// let d = personn.age;
// console.log(d);

// if person is defined but age is not defined then -> show undefined.
// let person = {
//   age: 24,
// };
// console.log(person.name);

