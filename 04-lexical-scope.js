/*
--------------------------------------------------------------------
     Relation between and execution context.
--------------------------------------------------------------------
  
  * Our all code runs under a execution context. 
  * Execution context is under a stack named as call stack.
  * Execution context is built when function is called.
  * In global context we will get a 1.global object , 2.this , and 
    allocate memory for variables.
  * Inside heap memory will be allocated for global variable.

*/

var varname = 10;
function fn() {
  console.log(varname);
  var varname = 20;
  console.log(varname);
}
fn();

/*
--------------------------------------------------------------------
              Scope
--------------------------------------------------------------------
  * Area where a function or a variable can be found or accessed.
  * A function will check if variable is present than that takes that
    value other wise it will check outside the function and further on
    if not then it will show error.

  ->  Lexical Scope (Outside)
     -------------------------
    * function is lexically scoped means we see outside function defination
      not outside function call if it is nested other-wise undefined.

   -> Scope Chain
     --------------
     if a variable is not found in the same level then it will found outside
     the function and so on this called lexical chain.
    *     
*/
console.log("line number 16", varname);
var varname = 20;
function b() {
  console.log("line number 22", varname);
}
console.log("line number 24", varname);
function fn() {
  console.log("line number 26", varname);
  var varname = 20;
  b();
  console.log("line number 29", varname);
}
fn();
