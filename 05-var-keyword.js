/*
--------------------------------------------------------------------
     Relation between and execution context.
--------------------------------------------------------------------
  
  * when let and const was not build then only var was be used for every purpose.
  * and var is a function scoped (used inside scope of a function) one value of 
    variable will be same in that function.
  
*/

// Qeustion-1
function fn() {
  console.log("line number 14", a);
  var a = 10;
  console.log("line number 16", a);
  if (a == 10) {
    console.log("line number 18", a);
    var a = 20;
    console.log("line number 20", a);
  }
}
fn();

// question-2
var a = 10;
console.log("line number 27", a);
function fcn() {
  console.log("line number 29", a);
  var a = 20;
  a++; // a=21
  console.log("line number 32", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 36", a);
  }
  console.log("line number 38", a);
}
fcn();
console.log("line number 41", a);
