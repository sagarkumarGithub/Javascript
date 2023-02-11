/* 
        Array
      ---------
*/

// declaring an array
var cars = [];

// declaring + initializing arr
var cars = ["BMW", "AUDI", "HONDA", 1, 2, 3, true, undefined];
// printing an array
console.cars;

// accesing elements in a array
console.log(cars[3]);
console.log(cars[0]);

// replacing elements in a array
cars[3] = "mahindra";
console.log(cars[3]);

// adding elements in arr
cars[8] = "maruti";
console.log(cars);

cars[23] = "ferrari";
console.log(cars.length);
console.log(cars);

// Methods
//----------

// push -> it adds the element at the last of an arr
cars.push("mustang");

// pop -> it removes the element from the last of an arr
cars.pop();
console.log(cars);
console.log(cars.length);

// shift -> it removes element from start of an arr.
cars.shift();
console.log(cars);

// unshift -> it add element at the starting of arr.
cars.unshift("tata");
console.log(cars);

/*
-----------------------------------------
                Objects
----------------------------------------- 
    * contains Key Value Pair :-
    * Every thing is object in javaScript.
    * Only 6 things are primitive:-
       1. number
       2. string
       3. boolean
       4. undefined
       5. null
       6, symbol
*/

// Create a Object..
let student = {
  name: "sagar",
  lastName: "kumar",
  sayHi: function () {
    console.log("sagar say hii!");
  },
};

// objects can be accessed in two ways
// 1. dot notation -> student.name = sagar
// 2. bracket notation -> student[name] -> sagar ( if variable is space seprated )

// for in loop -> print all properties
for (let key in student) {
  console.log(key, " :", student[key]);
}
student.sayHi();

// Arrays also behaves as object
const arr = [1, 2, 3, 4, 5];
arr.vaiabl = "element";
arr.funcn = function () {
  console.log("i am function of array");
};
console.log(arr);
console.log(arr.vaiabl);
arr.funcn();

// function also behaves as object
function fn() {
  console.log("hello from function..");
}
fn.prop = "property of a function";
fn.myfn = function () {
  console.log("I am a method of a function");
};

fn();
fn.myfn();
console.log(fn.prop);

//-----------------------------------------------------------------------------------------

var obj = {}; // empty object
console.log(obj);

var person = {
  name: "sagar",
  age: 23,
  phone: 3234349059,
  isMale: true,
  hieght: "170cm",
  "school name": "MBN",
};

console.log(person);

// How to access the object
//---------------------------
// 1. dot notation
console.log(person.name);
console.log(person.phone);

// 2. bracket notation
console.log(person[hieght]);
console.log(person["school name"]);

// nesting objects
var captainAmerica = {
  firstName: "steve",
  lastName: "rogers",
  friends: ["bucky", "tony stark", "bruce banner"],
  age: 122,
  isAvenger: true,
  address: {
    state: "manhattan",
    city: "new york",
    country: "usa",
  },
  sayHii: function () {
    console.log(
      `Hello my name is captain  ${captainAmerica.firstName} ${captainAmerica.lastName}`
    );
  },
};

console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);

console.log(captainAmerica.sayHii);
captainAmerica.sayHii();

// nested aobject accessing
console.log(captainAmerica.address.city);

// looping over objects
for (let key in captainAmerica) {
  console.log(key);
  console.log(captainAmerica[key]);
}

// deleting a key from object
delete captainAmerica.age;
console.log(captainAmerica);
