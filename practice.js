console.log("Java Script Revision");
console.log("----------------------");

//-------------------------------------------------------------------
//                   INTRODUCTION TO JAVASCRIPT
//-------------------------------------------------------------------

//1. How javascript works
//------------------------

//2. variables
//------------------------

//var
var x = 1;

//let
let y = 2;

//const
const z=3;

//3. datatypes
//------------------------

//1.primitive datatype(Stores single values)
//------------------------------------------
// String
let document = "pdf-files";
// Number
let savings = 50000;
// Boolean
let isModified = false;
// BigInt
let population = 43432742934324623746932479234;
// null
let balance = null;
// undefined
let allowed;
// Symbol
let sym = Symbol("sagar");

//2.non primitive(stores multiple values)
//------------------------------------------
// Array
let college = ["GZSCCET","IIT ROPPER","DAV"];

// Objects
let teacher = {
    name:"ravi",
    subject:"java",
    age:34,
    sallary:50000
}

//4. operators
//------------------------

console.log(2 == "2");
console.log(2 === "2");

//5. conditionals
//------------------------

let num = 5;

// 1.if-else
if(num){
    console.log("number is 5");
}else{
    console.log("number is not 5");
}

// 2.ternary operator
let result = (num == 5) ? "number is 5" : "number is not 5";
console.log(result);

// 3.switch-statement

switch(num){
    case 1:
       console.log("one");
       break;
    case 2:
        console.log("two");
        break;
    case 3:
       console.log("three");
       break;
    case 4:
        console.log("four");
        break;
    case 5:
       console.log("five");
       break;
}

//6. loops
//------------------------

// 1.for loop
//---------------
for(let i=0; i<5; i++){
    console.log(i);
}

// 2.while loop
//---------------
let i=5;
while(i>0){
    console.log(i);
    i--;
}

// 3.forEach loop
//---------------

let names = ["sagar","sahil","prem","rahul"];
names.forEach((name) => {
    console.log(name);
})

// 4 .for of loop
//---------------

let sallaries = [10000,20000,30000,40000,50000];
for(let salary of sallaries){
    console.log(salary);
}

// 5. for in loop
//---------------

let student = {
    name:"chandan",
    age:23,
    branch:"Cse"
}

for(let detail in student){
    console.log(`${detail} -> ${student[detail]}`)
}

//7. Hoisting
//---------------

//-------------------------------------------------------------------
//                    FUNCTIONAL PROGRAMMING
//-------------------------------------------------------------------

// 1. how functional programming works
//-------------------------------------

//2. types of functions
//-------------------------------------

// 1. normal function
// -------------------
function greeting(name){
    console.log(`Hello ${name}`);
}
greeting("Sagar");

// 2. arrow function
// -------------------
const showDetails = (name,age) => {
    console.log(`${name} is ${age} years old.`)
}
showDetails("sahil",20);

// 3. iffi function
// -------------------
(function(){
    console.log("I am iffi function.");
})()

//3. higher order functions
//-------------------------------------

let arr = [1,2,3,4,5];

// 1.map
//---------

let mappedArr = arr.map((item) => item*2);
console.log(mappedArr);

// 2.reduce
//----------

let reducedVal = arr.reduce(function(item,acc){
    return item*acc;
},1)
console.log(reducedVal);

// 3.filter
//----------

let filteredArr = arr.filter((item) => item % 2 == 1);
console.log(filteredArr);

//4. clousures
//-------------------------------------

function outerFun(){
    let a = 5;
    function innerFun(){
        console.log(a + 6);
    }
    return innerFun;
}
let catchInnerFun = outerFun();
catchInnerFun();

//-------------------------------------------------------------------
//                  OBJECT ORIENTED PROGRAMMING
//-------------------------------------------------------------------

// 1. this keyword
//-----------------------

// 2. call, apply & bind
//-----------------------
const person1 = {
    name : "chandan",
    age : 23
}

const person2 = {
    name : "rajan",
    age : 22
}

const person3 = {
    name : "rakesh",
    age : 25
}

function showDetail(city,car) {
    console.log(`${this.name} is ${this.age} year old. lives in ${city} and drives ${car}`)
}

//call
showDetail.call(person1,"gaya","toyota");

//apply
showDetail.apply(person2,["delhi","scorpio"]);

//bind
let bindedFun = showDetail.bind(person3,"punjab","thar");
bindedFun();

// 3. function curring
//-----------------------



// 4. classes and object
//-----------------------

class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    
    showDetails(){
        console.log(`${this.name} is ${this.age} year old.`)
    }
}

let person = new Person("himanshu",32);
person.showDetails();


// 5. constructor function
//------------------------

function car(brand,model,car) {
    this.brand=brand,
    this.model=model,
    this.car=car
    
    this.drive=function(){
        console.log(`i am driving ${this.brand}`);
    }
}

let car1 = new car("bmw", "xs", "blue");
let car2 = new car("lamborgini", "avantador", "yellow");

console.log(car1.brand);
console.log(car2.brand);

car1.drive();
car2.drive();

//-------------------------------------------------------------------
//                   ASYNCHRONOUS JAVASCRIPT
//-------------------------------------------------------------------

// 1. how asyncrounous js works
//------------------------------

// 2. callbacks
//------------------------------

function sayName(name,callback){
    console.log(`Hello ${name}`);
    callback();
}

function callbackFun(){
    console.log("I am callback function");
}

sayName("rohan",callbackFun);


// 3. promises
//------------------------------

//how to create a new promise.
//----------------------------

let count = true;

let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve("There is a count value");
    }else{
        reject("There is not a count value");
    }
})

console.log(countValue);

//how to handle promise. -> M-1
//------------------------------

// axios.get(URL)
// .then((response) =>{
//     console.log(response);
// })
// .catch((error) => {
//     console.log(error);
// })


// 2. async await
//------------------------------

//how to handle promise. -> M-2
//------------------------------

const fetchData = async function(){
    try{
        const response = await axios.get(URL);
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
